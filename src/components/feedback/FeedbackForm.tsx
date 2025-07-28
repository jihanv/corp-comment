import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedbackForm() {

    const handleAddToList = useFeedbackItemsStore(state => state.handleAddToList)

    const [text, setText] = useState("")
    const [isValid, setIsValid] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false)

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

        // Basic validation
        if (text.includes("#") && text.length > 5) {
            setIsValid(true)
            setTimeout(() => setIsValid(false), 2000)
            handleAddToList(text);
            setText("")
        } else {
            setIsInvalid(true)
            setTimeout(() => setIsInvalid(false), 2000)
        }


    }


    return (
        <>
            <form className={`form ${isValid ? "form--valid" : ""}  ${isInvalid ? "form--invalid" : ""}`}>
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
            </form >
        </>
    );
}
