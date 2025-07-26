import { HashtagListProps } from "../../lib/types"
import HashtagItem from "./HashtagItem"

export default function HashtagList({ companyList }: HashtagListProps) {
    return (
        <ul className="hashtags">
            {companyList.map(company => {
                return (
                    <HashtagItem company={company}></HashtagItem>
                )
            })}
        </ul>
    )
}
