import { useState } from "react";
import styles from "./Form.module.css";

/**
 * @param {{ addFlashcard: (options: { question: string; answer: string; }) => void; }} props
 */
export default function Form(props) {
  /**
   * The below is an example of "controlled inputs" and involves creating a state for tracking each input.
   * See https://dmitripavlutin.com/controlled-inputs-using-react-hooks/ for details.
   *
   * Alternatively, could use the FormData API or use a third party
   * custom hook to simplify/abstract away most of this form logic. But only 2 fields, so it's simple enough.
   */
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addFlashcard({
      question,
      answer,
    });
    setQuestion("");
    setAnswer("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Question:
        <input
          type="text"
          name="question"
          required
          maxLength={160}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label>
        Answer:
        <input
          type="text"
          name="answer"
          required
          value={answer}
          maxLength={160}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
