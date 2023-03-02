import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import 'animate.css';

export default function Conrad() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CS49 Personal Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/compsci 49 (1) 1.ico" />
      </Head>
      <Navbar />

      <h1 style={{
        color:"#1362d6",
        textAlign:"center",
        fontSize:"42px",
        fontFamily:"monospace"
        }}>Hi all,
      </h1>
      
      <p style={{
        textAlign:"center",
        fontSize:"18px",
        fontFamily:"serif"
        }} class="animate__animated animate__bounce">
        This is a personal page for Conrad Poon.
      </p>      
      
      <audio controls autoplay width="100">
        <source src="depechemode.mp3" type="audio/mp3"/>
      </audio>

      <img src="IMG_0360.JPG" width="30%" height="30%" alt="Fei Fei" class="animate__animated animate__fadeInRight"
        style={{
          display:"block",
          margin:"auto"
        }}
      />
      
      <h4 style={{
        textAlign:"center",
        fontFamily:"serif"
      }}>My dog, Fei Fei</h4>

      <main className={styles.main}>
        <h1 className={styles.title}>Conrad&apos;s Page : &#41;</h1>
      </main>
    </div>
  );
}