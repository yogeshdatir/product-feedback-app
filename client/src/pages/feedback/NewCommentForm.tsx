import React, { ChangeEvent, MouseEvent, useState } from "react";
import {
  NewCommentFormCard,
  NewCommentFormFooterRow,
  NewCommentFormHeader,
} from "./ViewFeedback.styled";
import TextareaField from "../feedbackForm/TextareaField";
import Button from "../../components/Button";
import { ICommentFormState, IFeedback, IComment } from "../../utils/types";
import { addCommentForFeedback } from "../../services/feedbackAPIs";

interface Props {
  parentFeedbackId: IFeedback["id"];
  setComments: React.Dispatch<React.SetStateAction<IComment[] | null>>;
}

const MAX_CHARACTER_LIMIT = 250;

function NewCommentForm({ parentFeedbackId, setComments }: Props) {
  const EmptyCommentForm: ICommentFormState = {
    content: "",
    user: "a3e86c3e-4a61-48d5-a8b8-e51cf7ff668a",
    parentFeedback: parentFeedbackId,
  };

  const [formState, setFormState] =
    useState<ICommentFormState>(EmptyCommentForm);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((prevFormState: ICommentFormState) => ({
      ...prevFormState,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let isError = false;
    if (!formState.content.toString().trim()) {
      setFormError("Can't be empty");
      isError = isError || true;
    } else {
      setFormError("");
      isError = isError || false;
    }
    return isError;
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
    const isError = validateForm();
    if (isError) {
      setLoading(false);
      return;
    }

    try {
      const result = await addCommentForFeedback(formState);
      const newComment: IComment = result.data[0];
      setComments((prevState) => {
        if (prevState) return [newComment, ...prevState];
        return [newComment];
      });
      setLoading(false);
    } catch (err: any) {
      console.error(err);
      setError(err);
      setLoading(false);
    }
    setFormState(EmptyCommentForm);
  };

  return (
    <NewCommentFormCard>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          <NewCommentFormHeader>add comment</NewCommentFormHeader>
          <TextareaField
            name="content"
            label=""
            subLabel=""
            placeholder="Type your comment here"
            rows={3}
            value={formState.content}
            onChange={handleChange}
            error={formError}
          />
          <NewCommentFormFooterRow>
            <span>
              {MAX_CHARACTER_LIMIT - formState.content.trim().length} Characters
              left
            </span>
            <Button
              type="button"
              backgroundColor="primary"
              color="buttonPrimary"
              onClick={handleSubmit}
            >
              Post Comment
            </Button>
          </NewCommentFormFooterRow>
        </>
      )}
    </NewCommentFormCard>
  );
}

export default NewCommentForm;
