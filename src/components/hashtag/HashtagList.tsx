import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem"

export default function HashtagList() {

    // const context = useFeedbackItemsContext();
    // const { companyList, handleSelectedCompany } = context

    const companyList = useFeedbackItemsStore(state => state.getCompanyList())
    const handleSelectedCompany = useFeedbackItemsStore(state => state.handleSelectedCompany)
    return (
        <ul className="hashtags">
            {companyList.map(company => {
                return (
                    <HashtagItem key={company} company={company} onSelectCompany={handleSelectedCompany}></HashtagItem>
                )
            })}
        </ul>
    )
}
