import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import BlinkData from "../../../assets/data/BlinkData.json";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";
import { Link } from "react-router-dom";
import FilledButton from "../FilledButton/filledbutton";


const ExploreModal = () => {
  return (
    <>
      <Box
        sx={{width: "100vw",height: "50vh",bgcolor: "background.paper",position: "absolute",top: "55px",zIndex: 100}}
        data-testid="exploreModal"
      >
        <Container sx={{ mt: 4 }}>
          <Box sx={{ display: "flex" }}>
            {BlinkData.explore.heading.map((button, index) => (
              <Box key={index} sx={{ cursor: "pointer" }}>
                <TypographyComponent
                  variant="subtitle2"
                  color={
                    index === 0 ? "secondary.500" : "textColors.mediumEmphasis"
                  }
                  children={button}
                  width="20vw"
                />
              </Box>
            ))}
          </Box>
          <Divider sx={{ width: "90%", borderColor: "#042330", my: 4 }} />
          <Grid container rowSpacing={2} columnSpacing={10}>
            {BlinkData.explore.body.map((item, index) => (
              <Grid
                item
                xs={4}
                key={index}
                justifyContent="flex-start"
                sx={{
                  ":hover": {
                    bgcolor: "background.paper",
                    color: "secondary.500",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to={item.path} style={{ textDecoration: "none" }}>
                    <FilledButton
                      preElement={
                        <img
                          src={`/${item.img}`}
                          alt={item.name}
                          style={{ marginRight: "4%", color: "blue" }}
                        />
                      }
                      variant="text"
                      children={item.name}
                      textVariant="body2"
                      textColor="textColors.mediumEmphasis"
                      bgcolor="background.paper"
                      align="flex-start"
                      isBorder={false}
                      hoverTextColor="secondary.500"
                      hoverColor="background.paper"
                      width="15vw"
                    />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ExploreModal;
