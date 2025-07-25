import { useEffect, useState } from "react"
import FeedbackItem from "./FeedbackItem"
import Spinner from "./Spinner"
import ErrorMessage from "./ErrorMessage"

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
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        setIsLoading(true)
        fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .then(data => {
                setFeedbackItems(data.feedbacks)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
                setErrorMessage("Something went wrong.")
            })
    }, [])

    return (
        <ol className="feedback-list">
            {
                isLoading ? <Spinner /> : null
            }
            {
                errorMessage ? <ErrorMessage message={errorMessage} /> : null
            }
            {feedbackItems.map((feedbackItem) => {
                return <FeedbackItem feedbackItem={feedbackItem} />
            })}
        </ol>
    )
}
