import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import {
  Outlet,
  Link,
  useParams,
  redirect,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ActionHeader } from "../../components/Common.styled";
import {
  addFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback,
} from "../../services/apis";
import { IFeedback, INewFeedback } from "../../types";
import {
  FeedbackFormWrapper,
  Form,
  FormActionsWrapper,
  FormField,
  FormWrapper,
  GoBackButton,
} from "./FeedbackForm.styled";

interface Props {
  isEdit?: boolean;
}

const EmptyFeedbackForm: INewFeedback = {
  title: "",
  category: "feature",
  description: "",
  status: "",
};

const FeedbackForm = ({ isEdit = false }: Props) => {
  const { id } = useParams();
  const [formState, setFormState] = useState<INewFeedback>(EmptyFeedbackForm);
  const [feedback, setFeedback] = useState<IFeedback | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchFeedback = async (id: IFeedback["id"]) => {
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
  };

  const removeFeedback = async (id: IFeedback["id"]) => {
    try {
      const result = await deleteFeedback(id);
      setLoading(false);
      navigate("/");
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
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
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (
    e: MouseEvent<HTMLButtonElement>,
    id: IFeedback["id"]
  ) => {
    removeFeedback(id);
  };

  const handleCancel = () => {
    if (feedback) {
      navigate(-1);
    } else {
      setFormState(EmptyFeedbackForm);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (feedback) {
      updateFeedback(formState);
      navigate(-1);
    } else {
      addFeedback(formState);
      navigate("/");
    }
  };

  return (
    <FeedbackFormWrapper>
      <ActionHeader>
        <GoBackButton>
          <Link to="/">Go Back</Link>
        </GoBackButton>
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
            <h1>
              {feedback ? `Editing ${feedback.title}` : `Create New Feedback`}
            </h1>
            <FormField>
              <label>Feedback Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={formState.title}
              />
            </FormField>
            <FormField>
              <label>Category</label>
              <select
                name="category"
                onChange={handleChange}
                value={formState.category}
              >
                <option>Feature</option>
                <option>Enhancement</option>
                <option>Bug</option>
              </select>
            </FormField>
            {feedback && (
              <FormField>
                <label>Status</label>
                <select
                  name="status"
                  onChange={handleChange}
                  value={formState.status}
                >
                  <option>suggestion</option>
                  <option>planned</option>
                  <option>in-progress</option>
                  <option>live</option>
                </select>
              </FormField>
            )}
            <FormField>
              <label>Feedback Detail</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formState.description}
              />
            </FormField>
            <FormActionsWrapper>
              {feedback && (
                <button
                  type="button"
                  onClick={(e) => handleDelete(e, feedback.id)}
                >
                  Delete
                </button>
              )}
              <button
                style={{ marginLeft: "auto" }}
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit">
                {feedback ? `Update Feedback` : `Add Feedback`}
              </button>
            </FormActionsWrapper>
          </Form>
        )}
      </FormWrapper>
    </FeedbackFormWrapper>
  );
};

export default FeedbackForm;
