import { useEffect, useState } from "react"
import Container from "./Container"
import Footer from "./Footer"
import HashtagList from "./HashtagList"
import { TFeedbackItem } from "../lib/types"

function App() {

  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
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

  const handleAddToList = (text: string) => {
    console.log(text)
    // Check if valid

    //extract company name
    const companyName = text.split(" ")
      .find(word => word.includes("#"))!
      .substring(1)

    //create new object
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1),
      companyName: companyName,
      text: text,
      daysAgo: 0,
    }

    //add object
    setFeedbackItems([...feedbackItems, newItem])
  }

  useEffect(() => {
    fetchFeedbackItems()
  }, [])

  return (
    <div className="app">
      <Footer />
      <Container isLoading={isLoading} handleAddToList={handleAddToList} feedbackItems={feedbackItems} errorMessage={errorMessage} />
      <HashtagList />
    </div>
  )
}

export default App
