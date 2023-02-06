import React, { useState } from "react";
import GiveFeedbackCard from "../../../../components/GiveFeedbackCard";
import UserFeedbackSection from "../MeetingTracker/UserFeedbackSection";
import _userFeedbackData from "../../../../_mockData/_userFeedbackData";

const FeedbackSection = () => {
  const [feedbackData, setFeedbackData] = useState(_userFeedbackData);

  return (
    <>
      <GiveFeedbackCard
        setFeedbackData={setFeedbackData}
        feedbackData={feedbackData}
      />
      <UserFeedbackSection feedbackData={feedbackData} />
    </>
  );
};

export default FeedbackSection;
