import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Badge from "../../components/Badge";
import { ActionHeader } from "../../components/Common.styled";
import { getFeedback } from "../../services/apis";
import { IFeedback } from "../../types";
import { GoBackButton } from "../feedbackForm/FeedbackForm.styled";
import {
  FeedbackCard,
  FeedbackTitle,
  FeedbackDescription,
  ContentWrapper,
} from "../home/FeedbackList/FeedbackList.styled";

const Container = styled.div`
  width: 730px;
  margin: auto;
`;

interface Props {}

const Feedback = (props: Props) => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState<IFeedback | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFeedback = async (id: IFeedback["id"]) => {
    try {
      const result = await getFeedback(id);
      setFeedback(result.data[0]);
      setLoading(false);
    } catch (err: any) {
      console.log(err);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchFeedback(id);
    }
  }, [id]);

  return (
    <Container>
      <ActionHeader>
        <GoBackButton>
          <Link to="/">Go Back</Link>
        </GoBackButton>
        {feedback && (
          <button>
            <Link to={`/edit/${id}`}>Edit Feedback</Link>
          </button>
        )}
      </ActionHeader>
      <ContentWrapper>
        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>error</p>
        ) : !feedback ? (
          <p>Not found</p>
        ) : (
          <FeedbackCard>
            <FeedbackTitle>{feedback.title}</FeedbackTitle>
            <FeedbackDescription style={{ marginTop: "0.25rem" }}>
              {feedback.description}
            </FeedbackDescription>
            <Badge style={{ marginTop: "0.75rem" }}>{feedback.category}</Badge>
          </FeedbackCard>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Feedback;
