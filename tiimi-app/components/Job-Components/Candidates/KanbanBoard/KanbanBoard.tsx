import React from 'react';
import styles from './KanbanBoard.module.css';
import { pipelineData } from '@/data/dummyData';
import KanbanColumn from '../KanbanColumn/KanbanColumn';

interface KanbanBoardProps {
  searchTerm?: string;
  dateFilter?: string;
  scoreFilter?: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ 
  searchTerm = '', 
  dateFilter = 'All', 
  scoreFilter = 'All' 
}) => {
  const filteredData = pipelineData.map(column => {
    const lowerSearch = searchTerm.toLowerCase();
    const filteredCandidates = column.candidates.filter(c => {
      // Search filter
      if (!c.name.toLowerCase().includes(lowerSearch)) return false;
      
      // Score filter
      if (scoreFilter === '4.0+' && c.rating < 4.0) return false;
      if (scoreFilter === '3.0+' && c.rating < 3.0) return false;
      
      // Date filter (dummy check based on the mocked strings)
      if (dateFilter === 'Oct 2023' && !c.appliedDate.includes('Oct, 2023')) return false;
      if (dateFilter === 'Sep 2023' && !c.appliedDate.includes('Sep, 2023')) return false;

      return true;
    });

    return {
      ...column,
      candidates: filteredCandidates,
      count: filteredCandidates.length // Update column count based on results
    };
  });

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardScroll}>
        {filteredData.map((column) => (
          <KanbanColumn key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
