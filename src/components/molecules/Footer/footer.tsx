import { Grid, Stack, Box } from "@mui/material";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";
import BlinkData from "../../../assets/data/BlinkData.json";
import logo from "../../../assets/images/Blinkist.png";
import React from "react"

const Footer = () => {
  return (
    <Box
      data-testid="footer"
      sx={{bgcolor: "background.paper",width: "100%",height: "370px",display: "flex",justifyContent: "center",alignItems: "center",mt: 15,
      }}
    >
      <Grid container spacing={6} width="83%" ml="280px">
        <Grid item lg={3.9} textAlign="left">
          <img src={logo} alt="Logo" />
          <Box mt="32px">
            <TypographyComponent
              children={BlinkData.footer.content[0]}
              variant="subtitle1"
              color="secondary.500"
            />
            <TypographyComponent
              children={BlinkData.footer.content[1]}
              variant="subtitle1"
              color="secondary.500"
            />
          </Box>
        </Grid>
        <Grid item lg={7} ml={16}>
          <Stack spacing={8} direction="row">
            {BlinkData.footer.options.map((content, index) => (
              <Stack spacing={2} alignItems="flex-start" key={index}>
                <TypographyComponent
                  variant="body1"
                  children={content.heading}
                  color="textColors.highEmphasis"
                />
                {content.content.map((item) => (
                  <TypographyComponent
                    variant="body2"
                    color="textColors.mediumEmphasis"
                    children={item}
                  />
                ))}
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item lg={4.5} ml={-5}>
          <TypographyComponent
            variant="caption"
            children={BlinkData.footer.copyright}
            color="textColors.mediumEmphasis"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
