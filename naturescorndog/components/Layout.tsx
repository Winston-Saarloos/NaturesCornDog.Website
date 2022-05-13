import * as React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";

interface Local {
  children?: React.ReactNode;
}

type Props = Local;

const Layout = ({ children }: Props) => {
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
      <>{children}</>
    </div>
  );
};

export default Layout;
