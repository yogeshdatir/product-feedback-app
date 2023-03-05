import React, { useState } from "react";
import TextareaField from "../feedbackForm/TextareaField";
import Button from "../../components/Button";
import { ReplyFormContainer } from "./ViewFeedback.styled";
import {
  IComment,
  IFeedback,
  IReply,
  IReplyFormState,
} from "../../utils/types";
import { addReply } from "../../services/feedbackAPIs";
import { useFeedbacks } from "../../contexts/FeedbackContext";

interface Props {
  parentFeedbackId: IFeedback["id"];
  parentCommentId: IComment["id"];
  replyingToUserId: IComment["id"];
  addReplyInComments: (reply: IReply) => void;
  setDisplayNewReplyForm: (prevState: boolean) => void;
}

function ReplyForm({
  parentFeedbackId,
  parentCommentId,
  replyingToUserId,
  addReplyInComments,
  setDisplayNewReplyForm,
}: Props) {
  const { updateRepliesCount, loggedInUserId } = useFeedbacks();
  const [formState, setFormState] = useState<IReplyFormState>({
    content: "",
    // TODO: Add default user from backend
    user: loggedInUserId,
    replyingTo: replyingToUserId,
    parentComment: parentCommentId,
  });
  const [loading, setLoading] = useState(false);

  const handleAddReply = async () => {
    if (!formState.content.toString().trim()) return;
    setLoading(true);
    try {
      const addedReply = await addReply(formState);
      addReplyInComments(addedReply.data[0] as IReply);
      updateRepliesCount(parentFeedbackId);
      setDisplayNewReplyForm(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReplyFormContainer>
      <TextareaField
        label=""
        subLabel=""
        placeholder="Type your reply here"
        fieldContainerStyle={{ flex: 1 }}
        value={formState.content}
        onChange={(e) =>
          setFormState((prevState: IReplyFormState) => ({
            ...prevState,
            content: e.target.value,
          }))
        }
        autoFocus
      />
      <Button
        type="button"
        backgroundColor="primary"
        color="buttonPrimary"
        onClick={handleAddReply}
        disabled={loading}
      >
        Post Reply
      </Button>
    </ReplyFormContainer>
  );
}

export default ReplyForm;
