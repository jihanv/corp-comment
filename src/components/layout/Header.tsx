import { HeaderProps } from "../../lib/types";
import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";



export default function Header({ handleAddToList }: HeaderProps) {
    return (
        <header>
            <Pattern />
            <Logo />
            <PageHeading />
            <FeedbackForm onAddToList={handleAddToList} />
        </header>
    )
}
