import { useState } from "react";
import styles from "./FlashcardItem.module.css";

/**
 * @param {{ flashcard: { id: string; question: string; answer: string; }; handleDelete: () => void; }} props
 */
export default function FlashCard(props) {
  /**
   * The state is within FlashCard. So if there are multiple FlashCard instances,
   * each will have their own state. This is useful as it allows each flashcard
   * to be flipped and flipped back independently, without affecting other flashcards.
   */
  const [isClicked, setIsClicked] = useState(false);

  return (
    <article
      className={`${styles.flashcard} ${isClicked ? styles.clicked : ""}`}
      onClick={() => setIsClicked((previous) => !previous)}
    >
      <button
        className={styles.deleteButton}
        onClick={props.handleDelete}
        aria-label="Delete this flashcard"
      >
        ❌
      </button>
      <span className={styles.emoji}>{isClicked ? "🤯" : "🤔"}</span>
      <p>{isClicked ? props.flashcard.answer : props.flashcard.question}</p>
    </article>
  );
}
