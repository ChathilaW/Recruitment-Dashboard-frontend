"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';
import {
  HomeIcon,
  CalendarIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { UserIcon as UserSolidIcon, CalendarIcon as CalendarSolidIcon, HomeIcon as HomeSolidIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
           <span className={styles.logoText}>FIK</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
          {pathname === '/' ? <HomeSolidIcon className={styles.icon} /> : <HomeIcon className={styles.icon} />}
        </Link>
        <Link href="/calendar" className={`${styles.navItem} ${pathname === '/calendar' ? styles.active : ''}`}>
          {pathname === '/calendar' ? <CalendarSolidIcon className={styles.icon} /> : <CalendarIcon className={styles.icon} />}
        </Link>
        <Link href="/jobs" className={`${styles.navItem} ${pathname.startsWith('/jobs') ? styles.active : ''}`}>
          <UserSolidIcon className={styles.icon} />
          {/* Keep notification dot for visual parity */}
          <span className={styles.notificationDot}></span>
        </Link>
        <Link href="/briefcase" className={`${styles.navItem} ${pathname === '/briefcase' ? styles.active : ''}`}>
          <BriefcaseIcon className={styles.icon} />
        </Link>
        <Link href="/documents" className={`${styles.navItem} ${pathname === '/documents' ? styles.active : ''}`}>
          <DocumentTextIcon className={styles.icon} />
        </Link>
      </nav>

      <div className={styles.bottomNav}>
        <Link href="/settings" className={`${styles.navItem} ${pathname === '/settings' ? styles.active : ''}`}>
          <Cog6ToothIcon className={styles.icon} />
        </Link>
        <a href="#" className={styles.avatarWrapper}>
          <div className={styles.avatarIcon}>
            <span className={styles.avatarText}>N</span>
          </div>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
