import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo192.png" alt="React logo" width="85px" height="85px" />
      <h1>React Flashcards</h1>
      <p>🧠 Expand your React knowledge, one flashcard at a time! 🐌</p>
    </header>
  );
}
