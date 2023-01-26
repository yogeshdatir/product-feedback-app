import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ActionHeader } from "../../components/Common.styled";
import GoBackButton from "../../components/GoBackButton";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import {
  addFeedback,
  getFeedback,
  updateFeedback,
} from "../../services/feedbackAPIs";
import {
  IFeedback,
  IFeedbackFormState,
  IStatus,
  ICategory,
} from "../../utils/types";
import {
  FeedbackFormWrapper,
  Form,
  FormActionsWrapper,
  FormField,
  FormTitle,
  FormWrapper,
} from "./FeedbackForm.styled";
import { ReactComponent as EditFeedbackIcon } from "../../assets/shared/icon-edit-feedback1.svg";
import { ReactComponent as NewFeedbackIcon } from "../../assets/shared/icon-new-feedback.svg";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import SelectField, { IOption } from "../../components/selectField";
import { useStatus } from "../../contexts/StatusContext";
import { useCategories } from "../../contexts/CategoryContext";

interface Props {
  isEdit?: boolean;
}

const EmptyFeedbackForm: IFeedbackFormState = {
  title: "",
  category: "feature",
  description: "",
  status: "",
};

const FeedbackForm = ({ isEdit = false }: Props) => {
  const { id } = useParams();
  const [formState, setFormState] =
    useState<IFeedbackFormState>(EmptyFeedbackForm);
  const [feedback, setFeedback] = useState<IFeedback | null>(null);
  const [formError, setFormError] = useState(EmptyFeedbackForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { feedbackList, removeFeedback, updateOrAddToFeedbackList } =
    useFeedbacks();
  const { status } = useStatus();
  const statusDropdownOptions = status.map(({ name }: IStatus) => ({
    value: name,
    displayValue: name,
  }));
  const { categories } = useCategories();
  const categoryDropdownOptions = categories.map(({ name }: ICategory) => ({
    value: name,
    displayValue: name,
  }));

  const fetchFeedback = async (id: IFeedback["id"]) => {
    const feedbackFromContext = await feedbackList.find(
      (feedback: IFeedback) => {
        if (feedback.id === id) return feedback;
      }
    );

    if (feedbackFromContext) {
      setFeedback(feedbackFromContext);
      setFormState({
        ...feedbackFromContext,
      });
      setLoading(false);
    } else {
      try {
        const result = await getFeedback(id);
        setFeedback(result.data[0]);
        setFormState({
          ...result.data[0],
        });
        setLoading(false);
      } catch (error: any) {
        setError(error);
        console.error(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchFeedback(id);
    }
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((formState: IFeedbackFormState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateSelectedStatus = (selectedStatus: IOption) => {
    // TODO: remove toString by correcting types
    setFormState((formState: IFeedbackFormState) => ({
      ...formState,
      status: selectedStatus.displayValue.toString(),
    }));
  };

  const updateSelectedCategory = (selectedCategory: IOption) => {
    // TODO: remove toString by correcting types
    setFormState((formState: IFeedbackFormState) => ({
      ...formState,
      category: selectedCategory.displayValue.toString(),
    }));
  };

  const handleDelete = (id: IFeedback["id"]) => {
    removeFeedback(id);
  };

  const handleCancel = () => {
    if (feedback) {
      navigate(-1);
    } else {
      setFormState(EmptyFeedbackForm);
    }
  };

  const validateForm = () => {
    let isError = false;
    Object.keys(formError).forEach((formStatePropertyName: string) => {
      if (!feedback && formStatePropertyName === "status") return;
      if (
        !formState[formStatePropertyName as keyof IFeedbackFormState].trim()
      ) {
        setFormError((prevState: IFeedbackFormState) => ({
          ...prevState,
          [formStatePropertyName]: "Can't be empty",
        }));
        isError = isError || true;
      } else {
        setFormError((prevState: IFeedbackFormState) => ({
          ...prevState,
          [formStatePropertyName]: "",
        }));
        isError = isError || false;
      }
    });
    return isError;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isError = validateForm();
    if (isError) return;

    if (feedback) {
      try {
        const result = await updateFeedback(formState);
        updateOrAddToFeedbackList(result.data[0]);
        setLoading(false);
        navigate(-1);
      } catch (error: any) {
        setError(error);
        console.error(error);
        setLoading(false);
      }
    } else {
      try {
        const result = await addFeedback(formState);
        updateOrAddToFeedbackList(result.data[0], true);
        setLoading(false);
        navigate("/");
      } catch (error: any) {
        setError(error);
        console.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <FeedbackFormWrapper>
      <ActionHeader>
        <GoBackButton />
      </ActionHeader>
      <FormWrapper>
        {isEdit && loading ? (
          <p>loading</p>
        ) : isEdit && error ? (
          <p>error</p>
        ) : isEdit && !feedback ? (
          <p>Not Found</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            {feedback ? (
              <EditFeedbackIcon className="feedback-icon" />
            ) : (
              <NewFeedbackIcon />
            )}
            <FormTitle>
              {feedback ? `Editing ${feedback.title}` : `Create New Feedback`}
            </FormTitle>
            <InputField
              label="Feedback Title"
              subLabel="Add a short, descriptive headline"
              type="text"
              name="title"
              onChange={handleChange}
              value={formState.title}
              error={formError.title}
            />
            <SelectField
              label="Category"
              subLabel="Choose a category for your feedback"
              selectedOption={{
                value: formState.category,
                displayValue: formState.category,
              }}
              setSelectedOption={updateSelectedCategory}
              options={categoryDropdownOptions}
            />
            {feedback && (
              <SelectField
                label="Update Status"
                subLabel="Change feature state"
                selectedOption={{
                  value: formState.status,
                  displayValue: formState.status,
                }}
                setSelectedOption={updateSelectedStatus}
                options={statusDropdownOptions}
              />
            )}
            <TextareaField
              label="Feedback Detail"
              subLabel="Include any specific comments on what should be improved, added, etc."
              rows={4}
              name="description"
              onChange={handleChange}
              value={formState.description}
              error={formError.description}
            />
            <FormActionsWrapper>
              {feedback && (
                <Button
                  backgroundColor="error"
                  color="buttonPrimary"
                  type="button"
                  onClick={(e) => handleDelete(feedback.id)}
                >
                  Delete
                </Button>
              )}
              <Button
                backgroundColor="secondary"
                color="buttonPrimary"
                style={{ marginLeft: "auto" }}
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                backgroundColor="primary"
                color="buttonPrimary"
              >
                {feedback ? `Update Feedback` : `Add Feedback`}
              </Button>
            </FormActionsWrapper>
          </Form>
        )}
      </FormWrapper>
    </FeedbackFormWrapper>
  );
};

export default FeedbackForm;
