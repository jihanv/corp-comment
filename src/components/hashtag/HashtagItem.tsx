import { HashtagItemProps } from "../../lib/types";

export default function HashtagItem({ company, onSelectCompany }: HashtagItemProps) {

    return (
        <li key={company}><button onClick={() => onSelectCompany(company)}>#{company}</button></li>
    )
}
