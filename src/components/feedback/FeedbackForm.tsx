import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
    onAddToList: (text: string) => void,
}
export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {

    const [text, setText] = useState("")

    const charCount = MAX_CHARACTERS - text.length

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        if (newText.length > MAX_CHARACTERS) {
            return
        }
        setText(newText)
    }
    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        onAddToList(text)
        setText("")
    }


    return (
        <>
            <form className="form">
                <textarea
                    onChange={handleChange}
                    value={text}
                    id="feedback-texarea"
                    placeholder=""
                    spellCheck={false} />
                <label htmlFor="feedback-textarea">
                    Enter your feedback here. Remember to #hashtag the company.
                </label>
                <div>
                    <p className="u-italic">{charCount}</p>
                    <button onClick={onSubmit}>
                        <span>Submit</span>
                    </button>
                </div>
            </form>
        </>
    );
}
