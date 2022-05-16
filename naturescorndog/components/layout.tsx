import * as React from "react";
import Head from "next/head";
import Header from "components/header";

import Paper from "@mui/material/Paper";

interface Local {
    children?: React.ReactNode;
}

type Props = Local;

const Layout = ({ children }: Props) => {
    return (
        <Paper sx={{ height: "100vh" }}>
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
        </Paper>
    );
};

export default Layout;
