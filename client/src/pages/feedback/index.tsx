import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFeedback } from "../../services/apis";
import { IFeedback } from "../../types";
import { GoBackButton } from "../feedbackForm/FeedbackForm.styled";

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
    <div>
      <div>
        <GoBackButton>
          <Link to="/">Go Back</Link>
        </GoBackButton>
        {feedback && (
          <button>
            <Link to={`/editfeedback/${id}`}>Edit Feedback</Link>
          </button>
        )}
        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>error</p>
        ) : !feedback ? (
          <p>Not found</p>
        ) : (
          <p>{feedback.title}</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
