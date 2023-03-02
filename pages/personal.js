import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import { Button } from "@nextui-org/react";

export default function Personal() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CS49 Personal Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/compsci 49 (1) 1.ico" />
      </Head>
      <Navbar />
      <h3>Everyone&apos;s personal pages</h3>
      <Button.Group
        size="xl"
        vertical
        color="gradient"
        bordered
        style={{ marginTop: "15px" }}
      >
        <Link href="/aiperi">
          <Button>Aiperi&apos;s Page</Button>
        </Link>
        <Link href="/alvin">
          <Button style={{ marginTop: "5px" }}>Alvin&apos;s Page</Button>
        </Link>
        <Link href="/ben">
          <Button style={{ marginTop: "5px" }}>Ben&apos;s Page</Button>
        </Link>
        <Link href="/bobby">
          <Button style={{ marginTop: "5px" }}>Bobby&apos;s Page</Button>
        </Link>
        <Link href="/conrad">
          <Button style={{ marginTop: "5px" }}>Conrad&apos;s Page</Button>
        </Link>
        <Link href="/emily">
          <Button style={{ marginTop: "5px" }}>Emily&apos;s Page</Button>
        </Link>
        <Link href="/jack">
          <Button style={{ marginTop: "5px" }}>Jack&apos;s Page</Button>
        </Link>
        <Link href="/justin">
          <Button style={{ marginTop: "5px" }}>Justin&apos;s Page</Button>
        </Link>
        <Link href="/ken">
          <Button style={{ marginTop: "5px" }}>Ken&apos;s Page</Button>
        </Link>
        <Link href="/kevin">
          <Button style={{ marginTop: "5px" }}>Kevin&apos;s Page</Button>
        </Link>
        <Link href="/rita">
          <Button style={{ marginTop: "5px" }}>Rita&apos;s Page</Button>
        </Link>
        <Link href="/stanley">
          <Button style={{ marginTop: "5px" }}>Stanley&apos;s Page</Button>
        </Link>
        <Link href="/yoyo">
          <Button style={{ marginTop: "5px" }}>Yoyo&apos;s Page</Button>
        </Link>
      </Button.Group>
    </div>
  );
}