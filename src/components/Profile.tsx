import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/jesstoselli.png' alt='Jess Toselli' />
      <div>
        <strong>Jess Toselli</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </div>
  );
}

// https://avatars.githubusercontent.com/u/54954987?s=460&v=4
