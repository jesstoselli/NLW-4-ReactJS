import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

const ExperienceBar: React.FC = () => {
  const { currentXP, xpToNextLevel } = useContext(ChallengesContext);

  const percentageToNextLevel = Math.round(currentXP * 100) / xpToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentageToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentageToNextLevel}%` }}
        >
          {currentXP} xp
        </span>
      </div>
      <span>{xpToNextLevel} xp</span>
    </header>
  );
};

export default ExperienceBar;
