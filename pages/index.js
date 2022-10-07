import Head from "next/head";
import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import Vision from "./components/Vision";
import LeadCaptureform from "./components/LeadCaptureform";
import Stats from "./components/stats";
import Partners from "./components/Partners";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";
import Last from "./components/Last";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GreedyGame</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className="section-1">
          <Vision />
          <LeadCaptureform />
        </div>
        <Stats />
        <Partners />
        <Clients />
        <Reviews />
        <Last/>
      </main>

      <footer className={styles.footer}>
        <span>©2022 GreedyGame,Inc. All rights reserved.</span>
      </footer>
    </div>
  );
}
