import React from 'react';
import styles from './KanbanColumn.module.css';
import { Column } from '@/data/dummyData';
import CandidateCard from '../CandidateCard/CandidateCard';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface KanbanColumnProps {
  column: Column;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column }) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div 
            className={styles.titlePill} 
            style={{ backgroundColor: column.color }}
          >
            {column.title}
          </div>
          <span className={styles.count}>{column.count}</span>
        </div>
        <button className={styles.detailBtn}>
          Detail <ChevronRightIcon className={styles.iconTiny} />
        </button>
      </div>

      <div className={styles.cardList}>
        {column.candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
