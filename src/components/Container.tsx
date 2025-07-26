import { TFeedbackItem } from "../lib/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type ContainerProps = {
    isLoading: boolean,
    handleAddToList: (text: string) => void,
    feedbackItems: TFeedbackItem[],
    errorMessage: string
}

export default function Container({ isLoading, handleAddToList, feedbackItems, errorMessage }: ContainerProps) {
    return (
        <main className="container">
            <Header handleAddToList={handleAddToList} />
            <FeedbackList isLoading={isLoading} feedbackItems={feedbackItems} errorMessage={errorMessage} />
        </main>
    )
}
