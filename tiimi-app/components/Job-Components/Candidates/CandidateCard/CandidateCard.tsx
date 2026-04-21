"use client";

import React, { useState } from 'react';
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
  const [currentRating, setCurrentRating] = useState(candidate.rating);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddAssessment = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    const val = parseFloat(inputValue);
    if (!isNaN(val) && val > 0 && val <= 5) {
      setCurrentRating(val);
    }
    setIsEditing(false);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

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
        {currentRating > 0 ? (
          <div className={styles.rating}>
            <StarIconSolid className={styles.starIcon} />
            <span className={styles.ratingText}>{currentRating} Overall</span>
          </div>
        ) : isEditing ? (
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            className={styles.ratingInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <button className={styles.addAssessmentBtn} onClick={handleAddAssessment}>
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
