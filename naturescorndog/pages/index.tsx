import * as React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nature&rsquo;s Corndog</title>
        <meta
          name="description"
          content="A fun project for @Rocko on Rec Room"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <>
        {'Welcome to a massive work in progress =]'}
      </>
    </div>
  );
};

export default Home;
