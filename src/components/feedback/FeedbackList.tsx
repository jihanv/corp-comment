import FeedbackItem from "./FeedbackItem"
import Spinner from "../Spinner"
import ErrorMessage from "../ErrorMessage"
import { TFeedbackItem } from "../../lib/types"

type FeedBackListProps = {
    isLoading: boolean,
    feedbackItems: TFeedbackItem[],
    errorMessage: string
}

export default function FeedbackList({ isLoading, feedbackItems, errorMessage }: FeedBackListProps) {

    return (
        <ol className="feedback-list">
            {
                isLoading ? <Spinner /> : null
            }
            {
                errorMessage ? <ErrorMessage message={errorMessage} /> : null
            }
            {feedbackItems.map((feedbackItem: TFeedbackItem) => {
                return <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
            })}
        </ol>
    )
}
