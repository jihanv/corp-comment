import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";
import { TFeedbackItem } from "./types";

export const useFeedbackItemsContext = () => {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not defined in FeedbackList component"
    );
  }
  return context;
};

export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchFeedbackItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    } catch {
      setErrorMessage("Something went wrong.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItems,
    setIsLoading,
    setErrorMessage,
  };
}
