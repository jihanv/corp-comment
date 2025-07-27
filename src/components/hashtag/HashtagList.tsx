import { useFeedbackItemsContext } from "../../lib/hooks"
import HashtagItem from "./HashtagItem"

export default function HashtagList() {

    const context = useFeedbackItemsContext();
    const { companyList, handleSelectedCompany } = context
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
