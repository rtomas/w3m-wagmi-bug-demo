import styles from "./page.module.css";
import ConnectButton from "./components/connect-button";

export default function Home() {
  return (
    <main className={styles.main}>
      <ConnectButton />
    </main>
  );
}
