import { HashtagListProps } from "../../lib/types"
import HashtagItem from "./HashtagItem"

export default function HashtagList({ companyList, handleSelectedCompany }: HashtagListProps) {
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
