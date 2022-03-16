import { Box, Grid } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";
import BlinkData from "../../../assets/data/BlinkData.json";


const Banner= () => {
  return (
    <Box
      width="100%"
      height="30vh"
      sx={{ bgcolor: "background.paper" }}
      data-testid="banner"
    >
      <Grid container>
        <Grid item xs={8}>
          <Grid container spacing={2} sx={{ ml: 10, mt: 5 }}>
            <Grid item xs={8}>
              <TypographyComponent
                variant="h1"
                color="textColors.highEmphasis"
                children={BlinkData.banner[0]}
              />
            </Grid>
            <Grid item xs={8}>
              <TypographyComponent
                variant="h3"
                color="textColors.mediumEmphasis"
                children={BlinkData.banner[1]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ position: "relative", right: 0 }}>
            <img src="images/banner.png" alt="banner" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;