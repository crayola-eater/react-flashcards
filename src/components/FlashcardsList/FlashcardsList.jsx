import FlashCard from "../FlashcardItem/FlashcardItem.jsx";
import styles from "./FlashcardsList.module.css";

/**
 * @param {{ flashcards: { id: string; question: string; answer: string; }[]; deleteFlashcard: (id: string) => void; }} props
 */
export default function FlashCards(props) {
  /**
   * Uses an if statement to conditionally render. See https://react.dev/learn/conditional-rendering.
   */
  if (props.flashcards.length < 1) {
    return (
      <main className={styles.container}>
        <h2>No Flashcards Added! 🫢</h2>
        <p>You can add a flashcard using the form above.☝️</p>
      </main>
    );
  }

  return (
    <main className={`${styles.container} ${styles.flashcardsGrid}`}>
      {/**
       * Create a new empty array (this is where you'll store your React elements)
       * Loop over the array of flash card objects. For each flashcard object:
       *    Create a new FlashcardItem component (for the current flashcard object)
       *    Add the newly created component instance to the array of React elements
       */}
      {props.flashcards.map((flashcard) => (
        <FlashCard
          key={flashcard.id}
          flashcard={flashcard}
          handleDelete={() => props.deleteFlashcard(flashcard.id)}
        />
      ))}
    </main>
  );
}
