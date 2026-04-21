import React from 'react';
import styles from './FilterBar.module.css';
import { 
  MagnifyingGlassIcon, 
  CalendarDaysIcon,
  CheckBadgeIcon,
  FunnelIcon,
  UserPlusIcon,
  Cog6ToothIcon,
  ViewColumnsIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.leftGroup}>
        <div className={styles.searchBox}>
          <MagnifyingGlassIcon className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        
        <button className={styles.filterBtn}>
          <CalendarDaysIcon className={styles.iconSmall} /> Date Range <ChevronDownIcon className={styles.iconTiny} />
        </button>
        
        <button className={styles.filterBtn}>
          <CheckBadgeIcon className={styles.iconSmall} /> Score Range <ChevronDownIcon className={styles.iconTiny} />
        </button>
        
        <button className={styles.filterBtn}>
          <FunnelIcon className={styles.iconSmall} /> Advance Filter <ChevronDownIcon className={styles.iconTiny} />
        </button>
      </div>

      <div className={styles.rightGroup}>
        <button className={styles.textBtn}>
          <UserPlusIcon className={styles.iconSmall} /> Refer People
        </button>
        
        <button className={styles.iconBtn}>
          <Cog6ToothIcon className={styles.icon} />
        </button>
        
        <button className={styles.viewDropdown}>
          <ViewColumnsIcon className={styles.iconSmall} /> Kanban <ChevronDownIcon className={styles.iconTiny} />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
