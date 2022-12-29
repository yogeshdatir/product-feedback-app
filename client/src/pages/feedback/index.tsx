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

  if (loading) {
    return <p>loading</p>;
  } else if (error) {
    return <p>error</p>;
  } else if (!feedback) {
    return <p>Not found</p>;
  }

  return (
    <div>
      <div>
        <GoBackButton>
          <Link to="/">Go Back</Link>
        </GoBackButton>
        <button>
          <Link to={`/editfeedback/${id}`}>Edit Feedback</Link>
        </button>
      </div>
      {feedback.title}
    </div>
  );
};

export default Feedback;
