import FeedbackItem from "./FeedbackItem"
import Spinner from "../Spinner"
import ErrorMessage from "../ErrorMessage"
import { FeedBackListProps, TFeedbackItem } from "../../lib/types"


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
