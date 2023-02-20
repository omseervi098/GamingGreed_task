import Head from "next/head";
import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import Vision from "./components/Vision";
import LeadCaptureform from "./components/LeadCaptureform";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";
import Last from "./components/Last";
import Link from "next/link";
const isBrowser = () => typeof window !== 'undefined';
export default function Home() {
  function handleBtn(){
    document.getElementById("form").scrollIntoView("behavior: smooth");
    return;
  }
  function handleNav(){
    if(window.scrollY>=(document.getElementById("client").offsetTop - document.getElementById("navbar").clientHeight)){
      document.getElementById("navbar").style.transition = "all 0.5s ease-in-out";
      document.getElementById("navbar").style.display="none";
    }else{
      document.getElementById("navbar").style.transition = "all 0.5s ease-in-out";
      document.getElementById("navbar").style.display="flex"
    }
  }

  if(isBrowser()){
    window.addEventListener("scroll", handleNav);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>GreedyGame</title>
        <meta name="description" content="from index.js" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="from index.js" />
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
        <Link href="/about">About</Link>
      </footer>
        <div className="get_started_btn">
          <div>Get a Call back from us <button onClick={handleBtn}>Get Started</button></div>
        </div>
    </div>
  );
}
