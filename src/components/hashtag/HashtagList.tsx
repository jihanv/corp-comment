import { HashtagListProps } from "../../lib/types"
import HashtagItem from "./HashtagItem"

export default function HashtagList({ companyList, handleSelectedCompany }: HashtagListProps) {
    return (
        <ul className="hashtags">
            {companyList.map(company => {
                return (
                    <HashtagItem company={company} onClick={handleSelectedCompany}></HashtagItem>
                )
            })}
        </ul>
    )
}
