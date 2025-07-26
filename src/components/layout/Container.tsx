import { ContainerProps } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";


export default function Container({ isLoading, handleAddToList, feedbackItems, errorMessage }: ContainerProps) {
    return (
        <main className="container">
            <Header handleAddToList={handleAddToList} />
            <FeedbackList isLoading={isLoading} feedbackItems={feedbackItems} errorMessage={errorMessage} />
        </main>
    )
}
