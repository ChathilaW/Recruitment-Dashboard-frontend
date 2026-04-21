import styles from "./page.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import JobHeader from "../components/JobHeader/JobHeader";

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Header />
      <main className={styles.mainContent}>
        <JobHeader />
      </main>
    </div>
  );
}
