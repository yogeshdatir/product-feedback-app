import React from "react";
import { HeaderTitle, RoadmapTitle, Wrapper } from "./Header.styled";
import { ReactComponent as SuggestionsIcon } from "../assets/suggestions/icon-suggestions.svg";
import { useFeedbacks } from "../contexts/FeedbackContext";
import GoBackButton from "./GoBackButton";
import Button from "./Button";
import { useNavigate } from "react-router";
import useMediaQuery from "../hooks/useMediaQuery";

interface Props {
  forRoadmap?: boolean;
}

const Header = ({ forRoadmap }: Props) => {
  const { filteredFeedbackList, feedbackList, categoryToFilter } =
    useFeedbacks();
  const navigate = useNavigate();
  const isMobileDevice = useMediaQuery("(max-width: 767px)");

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
        !isMobileDevice && (
          <>
            <SuggestionsIcon />
            <HeaderTitle>{`${suggestionCount} Suggestions`}</HeaderTitle>
          </>
        )
      )}
      <Button
        style={{ marginLeft: "auto" }}
        backgroundColor="primary"
        color="buttonPrimary"
        onClick={() => {
          navigate("/add");
        }}
      >
        + Add Feedback
      </Button>
    </Wrapper>
  );
};

export default Header;
