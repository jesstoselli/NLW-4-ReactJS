import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Profile } from "../components/Profile";

import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import ChallengeBox from "../components/ChallengeBox";

interface HomeProps {
  level: number;
  currentXP: number;
  challengesCompleted: number;
}

export default function Home(props) {
  const { level, currentXP, challengesCompleted } = props;

  return (
    <ChallengesProvider
      level={level}
      currentXP={currentXP}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

// tudo o que ocorre nessa função, acontece no servidor Node
// que o Next.js roda
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // chamada à API

  const { level, currentXP, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
