import React from 'react';
import styles from './KanbanBoard.module.css';
import { pipelineData } from '@/data/dummyData';
import KanbanColumn from '../KanbanColumn/KanbanColumn';

const KanbanBoard = () => {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardScroll}>
        {pipelineData.map((column) => (
          <KanbanColumn key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
