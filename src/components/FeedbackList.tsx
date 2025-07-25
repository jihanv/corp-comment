import FeedbackItem from "./FeedbackItem"

const feedbackItems = [{
    upvoteCount: 563,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "Blah",
    daysAgo: 3
},
{
    upvoteCount: 234,
    badgeLetter: "D",
    companyName: "McDonalds",
    text: "BOOO",
    daysAgo: 3
}]
export default function FeedbackList() {
    return (
        <ol className="feedback-list">
            {feedbackItems.map((feedbackItem) => {
                return <FeedbackItem feedbackItem={feedbackItem} />
            })}
        </ol>
    )
}
