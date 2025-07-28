import FeedbackItem from "./FeedbackItem"
import Spinner from "../Spinner"
import ErrorMessage from "../ErrorMessage"
import { TFeedbackItem } from "../../lib/types"
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore"


export default function FeedbackList() {

    const isLoading = useFeedbackItemsStore(state => state.isLoading)
    const filteredFeedbackItems = useFeedbackItemsStore(state => state.getFilteredFeedbackItems())
    const errorMessage = useFeedbackItemsStore(state => state.errorMessage)
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
