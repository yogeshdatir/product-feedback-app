import React from "react";
import {
  AddFeedbackButton,
  HeaderTitle,
  RoadmapTitle,
  Wrapper,
} from "./Header.styled";
import SuggestionsIcon from "../assets/suggestions/icon-suggestions.svg";
import { useFeedbacks } from "../contexts/FeedbackContext";
import GoBackButton from "./GoBackButton";

interface Props {
  forRoadmap?: boolean;
}

const Header = ({ forRoadmap }: Props) => {
  const { filteredFeedbackList, feedbackList, categoryToFilter } =
    useFeedbacks();

  const suggestionCount = categoryToFilter
    ? filteredFeedbackList.length
    : feedbackList.length;

  return (
    <Wrapper>
      {forRoadmap ? (
        <>
          <div>
            <GoBackButton isLightThemed />
            <RoadmapTitle>Roadmap</RoadmapTitle>
          </div>
          <AddFeedbackButton
            style={{
              marginLeft: "auto",
            }}
            to="/add"
          >
            + Add feedback
          </AddFeedbackButton>
        </>
      ) : (
        <>
          <img src={SuggestionsIcon} />
          <HeaderTitle>{`${suggestionCount} Suggestions`}</HeaderTitle>
          <AddFeedbackButton
            style={{
              marginLeft: "auto",
            }}
            to="/add"
          >
            + Add feedback
          </AddFeedbackButton>
        </>
      )}
    </Wrapper>
  );
};

export default Header;
