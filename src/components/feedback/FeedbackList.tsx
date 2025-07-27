import FeedbackItem from "./FeedbackItem"
import Spinner from "../Spinner"
import ErrorMessage from "../ErrorMessage"
import { TFeedbackItem } from "../../lib/types"
import { useFeedbackItemsContext } from "../../lib/hooks"


export default function FeedbackList() {
    const context = useFeedbackItemsContext()
    const { isLoading, filteredFeedbackItems, errorMessage } = context
    return (
        <ol className="feedback-list">
            {
                isLoading ? <Spinner /> : null
            }
            {
                errorMessage ? <ErrorMessage message={errorMessage} /> : null
            }
            {filteredFeedbackItems.map((feedbackItem: TFeedbackItem) => {
                return <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
            })}
        </ol>
    )
}
