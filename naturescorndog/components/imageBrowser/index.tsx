import * as React from "react";

import GridView from "components/imageBrowser/gridview";
import Header from "components/imageBrowser/header";

import Grid from "@mui/material/Grid";

const ImageBrowserMain = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid item>Home of Image Browser v3.0!</Grid>
            <Grid>
                <GridView />
            </Grid>
        </Grid>
    );
};

export default ImageBrowserMain;
