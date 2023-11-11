import { useState } from "react";
import Header from "../Header/Header.jsx";
import Form from "../Form/Form.jsx";
import FlashCards from "../FlashcardsList/FlashcardsList.jsx";
import Footer from "../Footer/Footer.jsx";
import { initialFlashcards } from "./data.js";
import styles from "./App.module.css";

export default function App() {
  /**
   * Logic for managing flash cards (e.g. state + 2 helper functions) could be tucked away into a custom hook. But below is simple enough for now.
   */
  const [flashcards, setFlashcards] = useState(initialFlashcards);

  /**
   * Helper function for creating a flashcard and adding it to state immutably. It internally generates an id.
   *
   * @param {{ question: string; answer: string; }} flashcardWithoutId
   */
  function addFlashcard(flashcardWithoutId) {
    const newFlashcard = {
      /**
       * Assumption: No database to produce the id and running in an environment that
       * supports a global window.crypto object. Could also use a third party package instead (uuid, nanoid, etc).
       *
       * For browser support, see: https://caniuse.com/mdn-api_crypto_randomuuid
       */
      id: window.crypto.randomUUID(),
      question: flashcardWithoutId.question,
      answer: flashcardWithoutId.answer,
    };
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  }

  /**
   * Helper function for deleting a flashcard from state immutably.
   *
   * @param {string} idToDelete
   */
  function deleteFlashcardById(idToDelete) {
    setFlashcards((prevFlashcards) => {
      return prevFlashcards.filter((card) => card.id !== idToDelete);
    });
  }

  return (
    <div className={styles.app}>
      <Header />
      <Form addFlashcard={addFlashcard} />
      <FlashCards flashcards={flashcards} deleteFlashcard={deleteFlashcardById} />
      <Footer />
    </div>
  );
}
