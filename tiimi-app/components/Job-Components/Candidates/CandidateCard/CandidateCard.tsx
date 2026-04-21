import React from 'react';
import styles from './CandidateCard.module.css';
import { Candidate } from '@/data/dummyData';
import Image from 'next/image';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon, UserPlusIcon } from '@heroicons/react/24/outline';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image 
          src={candidate.avatar} 
          alt={candidate.name} 
          width={36} 
          height={36} 
          className={styles.avatar} 
        />
        <div className={styles.info}>
          <h4 className={styles.name}>{candidate.name}</h4>
          <p className={styles.date}>Applied at {candidate.appliedDate}</p>
        </div>
      </div>
      
      <div className={styles.footer}>
        {candidate.rating > 0 ? (
          <div className={styles.rating}>
            <StarIconSolid className={styles.starIcon} />
            <span className={styles.ratingText}>{candidate.rating} Overall</span>
          </div>
        ) : (
          <button className={styles.addAssessmentBtn}>
            + Add Assessment
          </button>
        )}
        
        <div className={styles.actions}>
          {candidate.isReferred && (
            <div className={styles.referredTag}>
              <UserPlusIcon className={styles.iconTiny} /> Referred
            </div>
          )}
          <button className={styles.moreBtn}>
            <EllipsisHorizontalIcon className={styles.iconSmall} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
