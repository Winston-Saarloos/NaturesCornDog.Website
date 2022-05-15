import * as React from "react";
import type { NextPage } from "next";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Home: NextPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "5px" }}
    >
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper>
          <div style={{ marginBottom: "20px" }}>
            <Typography variant="h6">
              {"Welcome to a massive work in progress =]"}
            </Typography>
            <Typography variant="body1">{"Current Priority:"}</Typography>
            <Typography variant="body1">
              <Link href="/imagebrowser" underline="hover">
                {"🎉 Image Browser V3 🎉"}
              </Link>
            </Typography>
          </div>
          <div>
            <Typography variant="caption">
              This is a Next.js app hosted on Netlify
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default Home;
