import styles from "./page.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import JobHeader from "../components/JobHeader/JobHeader";
import FilterBar from "@/components/Job-Components/Candidates/FilterBar/FilterBar";
import KanbanBoard from "@/components/Job-Components/Candidates/KanbanBoard/KanbanBoard";

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Header />
      <main className={styles.mainContent}>
        <JobHeader />
        <FilterBar />
        <KanbanBoard />
      </main>
    </div>
  );
}
