import { useEffect, useState } from "react"
import FeedbackItem from "./FeedbackItem"

// const exampleFeedbackItems = [{
//     upvoteCount: 563,
//     badgeLetter: "S",
//     companyName: "Starbucks",
//     text: "Blah",
//     daysAgo: 3
// },
// {
//     upvoteCount: 234,
//     badgeLetter: "D",
//     companyName: "McDonalds",
//     text: "BOOO",
//     daysAgo: 3
// }]
export default function FeedbackList() {

    const [feedbackItems, setFeedbackItems] = useState([])

    useEffect(() => {
        fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
            .then(res => res.json())
            .then(data => {
                setFeedbackItems(data.feedbacks)
            })
    }, [])

    return (
        <ol className="feedback-list">
            {feedbackItems.map((feedbackItem) => {
                return <FeedbackItem feedbackItem={feedbackItem} />
            })}
        </ol>
    )
}
