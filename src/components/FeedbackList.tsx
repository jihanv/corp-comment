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

    const fetchFeedbackItems = async () => {
        setIsLoading(true)
        try {
            const response = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")

            if (!response.ok) {
                throw new Error()
            }
            const data = await response.json()
            setFeedbackItems(data.feedbacks)
        } catch {
            setErrorMessage("Something went wrong.")
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchFeedbackItems()
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
