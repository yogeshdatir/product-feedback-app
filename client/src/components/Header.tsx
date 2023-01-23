import React from "react";
import { HeaderTitle, RoadmapTitle, Wrapper } from "./Header.styled";
import { ReactComponent as SuggestionsIcon } from "../assets/suggestions/icon-suggestions.svg";
import { useFeedbacks } from "../contexts/FeedbackContext";
import GoBackButton from "./GoBackButton";
import Button from "./Button";
import { goBack } from "../utils/sharedFunctions";
import { useNavigate } from "react-router";

interface Props {
  forRoadmap?: boolean;
}

const Header = ({ forRoadmap }: Props) => {
  const { filteredFeedbackList, feedbackList, categoryToFilter } =
    useFeedbacks();
  const navigate = useNavigate();

  const suggestionCount = categoryToFilter
    ? filteredFeedbackList.length
    : feedbackList.length;

  return (
    <Wrapper isRoadmapPage={forRoadmap}>
      {forRoadmap ? (
        <div>
          <GoBackButton isLightThemed />
          <RoadmapTitle>Roadmap</RoadmapTitle>
        </div>
      ) : (
        <>
          <SuggestionsIcon />
          <HeaderTitle>{`${suggestionCount} Suggestions`}</HeaderTitle>
        </>
      )}
      <Button
        style={{ marginLeft: "auto" }}
        backgroundColor="primary"
        color="buttonPrimary"
        onClick={() => {
          goBack(navigate);
        }}
      >
        + Add Feedback
      </Button>
    </Wrapper>
  );
};

export default Header;
