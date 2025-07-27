
import { createContext, useMemo, useState } from "react"
import { FeedbackItemsContextProps, TFeedbackItem, TFeedbackItemsContext } from "../lib/types"
import { useFeedbackItems } from "../lib/hooks"

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null)


export default function FeedbackItemsContextProvider({ children }: FeedbackItemsContextProps) {
    const { feedbackItems,
        isLoading,
        errorMessage,
        setFeedbackItems,
    } = useFeedbackItems()

    const [selectedCompany, setSelectedCompany] = useState("")
    const companyList = [...new Set(feedbackItems.map(item => item.company))]



    const filteredFeedbackItems = useMemo(() => selectedCompany !== "" ?
        feedbackItems.filter(feedbackItem => feedbackItem.company.toUpperCase() === selectedCompany.toUpperCase())
        : feedbackItems, [feedbackItems, selectedCompany])

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

