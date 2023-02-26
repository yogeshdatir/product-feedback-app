import React, {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useState,
  useCallback,
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
  type IFeedback,
  type IFeedbackFormState,
  type IStatus,
  type ICategory,
} from "../../utils/types";
import {
  CancelButton,
  FeedbackFormWrapper,
  Form,
  FormActionsWrapper,
  FormTitle,
  FormWrapper,
} from "./FeedbackForm.styled";
import { ReactComponent as EditFeedbackIcon } from "../../assets/shared/icon-edit-feedback1.svg";
import { ReactComponent as NewFeedbackIcon } from "../../assets/shared/icon-new-feedback.svg";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import SelectField, { type IOption } from "../../components/selectField";
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
  upvotes: 0,
  commentsCount: 0,
  repliesCount: 0,
};

// TODO: Add immediate error handling feedback feature
function FeedbackForm({ isEdit = false }: Props) {
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

  const fetchFeedback = useCallback(
    async (feedbackID: IFeedback["id"]) => {
      const feedbackFromContext = feedbackList.find(
        (feedbackElement: IFeedback) => {
          if (feedbackElement.id === feedbackID) return feedbackElement;
          return null;
        }
      );

      if (feedbackFromContext != null) {
        setFeedback(feedbackFromContext);
        setFormState({
          ...feedbackFromContext,
        });
        setLoading(false);
      } else {
        try {
          if (id) {
            const result = await getFeedback(id);
            setFeedback(result.data[0]);
            setFormState({
              ...result.data[0],
            });
          }
          setLoading(false);
        } catch (err: any) {
          setError(err);
          console.error(err);
          setLoading(false);
        }
      }
    },
    [feedbackList, id]
  );

  useEffect(() => {
    if (id) {
      fetchFeedback(id);
    }
  }, [id, fetchFeedback]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prevFormState: IFeedbackFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateSelectedStatus = (selectedStatus: IOption) => {
    // TODO: remove toString by correcting types
    setFormState((prevFormState: IFeedbackFormState) => ({
      ...prevFormState,
      status: selectedStatus.displayValue.toString(),
    }));
  };

  const updateSelectedCategory = (selectedCategory: IOption) => {
    // TODO: remove toString by correcting types
    setFormState((prevFormState: IFeedbackFormState) => ({
      ...prevFormState,
      category: selectedCategory.displayValue.toString(),
    }));
  };

  const handleDelete = (feedbackID: IFeedback["id"]) => {
    removeFeedback(feedbackID);
  };

  const handleCancel = () => {
    if (feedback != null) {
      navigate(-1);
    } else {
      setFormState(EmptyFeedbackForm);
    }
  };

  const validateForm = () => {
    let isError = false;
    Object.keys(formError).forEach((formStatePropertyName: string) => {
      if (feedback == null && formStatePropertyName === "status") return;
      if (
        !formState[formStatePropertyName as keyof IFeedbackFormState]
          .toString()
          .trim()
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

    if (feedback != null) {
      try {
        const result = await updateFeedback(formState);
        updateOrAddToFeedbackList(result.data[0]);
        setLoading(false);
        navigate(-1);
      } catch (err: any) {
        setError(err);
        console.error(err);
        setLoading(false);
      }
    } else {
      try {
        const result = await addFeedback(formState);
        updateOrAddToFeedbackList(result.data[0], true);
        setLoading(false);
        navigate("/");
      } catch (err: any) {
        setError(err);
        console.error(err);
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
        ) : isEdit && feedback == null ? (
          <p>Not Found</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            {feedback != null ? (
              <EditFeedbackIcon className="feedback-icon" />
            ) : (
              <NewFeedbackIcon className="feedback-icon" />
            )}
            <FormTitle>
              {feedback != null
                ? `Editing ${feedback.title}`
                : "Create New Feedback"}
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
            {feedback != null && (
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
              {feedback != null && (
                <Button
                  backgroundColor="error"
                  color="buttonPrimary"
                  type="button"
                  onClick={() => {
                    handleDelete(feedback.id);
                  }}
                >
                  Delete
                </Button>
              )}
              <CancelButton
                backgroundColor="secondary"
                color="buttonPrimary"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </CancelButton>
              <Button
                type="submit"
                backgroundColor="primary"
                color="buttonPrimary"
              >
                {feedback != null ? "Update Feedback" : "Add Feedback"}
              </Button>
            </FormActionsWrapper>
          </Form>
        )}
      </FormWrapper>
    </FeedbackFormWrapper>
  );
}

export default FeedbackForm;
