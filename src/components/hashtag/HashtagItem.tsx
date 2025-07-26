import { HashtagItemProps } from "../../lib/types";

export default function HashtagItem({ company, onClick }: HashtagItemProps) {

    const handleClick = () => {
        onClick(company)
    }
    return (
        <li key={company}><button onClick={handleClick}>#{company}</button></li>
    )
}
