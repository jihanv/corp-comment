
import { createContext, useEffect, useMemo, useState } from "react"
import { FeedbackItemsContextProps, TFeedbackItem, TFeedbackItemsContext } from "../lib/types"

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null)


export default function FeedbackItemsContextProvider({ children }: FeedbackItemsContextProps) {

    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [selectedCompany, setSelectedCompany] = useState("")
    const companyList = [...new Set(feedbackItems.map(item => item.company))]

    const filteredFeedbackItems = useMemo(() => selectedCompany !== "" ?
        feedbackItems.filter(feedbackItem => feedbackItem.company.toUpperCase() === selectedCompany.toUpperCase())
        : feedbackItems, [feedbackItems, selectedCompany])

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

    const handleAddToList = async (text: string) => {
        console.log(text)

        const company = text.split(" ")
            .find(word => word.includes("#"))!
            .substring(1)

        const newItem: TFeedbackItem = {
            id: new Date().getTime(),
            upvoteCount: 0,
            badgeLetter: company.substring(0, 1),
            company: company,
            text: text,
            daysAgo: 0,
        }

        setFeedbackItems([...feedbackItems, newItem])

        fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
    }

    useEffect(() => {
        fetchFeedbackItems()
    }, [])

    const handleSelectedCompany = (company: string) => {
        setSelectedCompany(company)
    }
    return (
        <FeedbackItemsContext.Provider
            value={{
                filteredFeedbackItems,
                isLoading,
                errorMessage,
                handleAddToList,
                companyList,
                handleSelectedCompany
            }}>{children}</FeedbackItemsContext.Provider>
    )
}

