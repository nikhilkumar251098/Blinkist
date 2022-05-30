import React, { useState } from "react";
import { Avatar, Box, Container, Grid } from "@mui/material";
import logo from "../../../assets/images/Blinkist.png";
import NavButton from "../../molecules/NavButton/navbutton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ExploreModal from "../../molecules/ExploreModal/exploremodal";

const Header = () => {
  const [exploreModal, setExploreModal] = useState(false);

  const arrowDownIcon = <img src="/images/down.png" alt="down" />;

  const arrowUpIcon = <img src="/images/up.png" alt="up" />;

  const toggleExplore = () => {
    setExploreModal(!exploreModal);
  };

  const { logout } = useAuth0();

  const avatar = (
    <>
      <Avatar onClick={() => logout({returnTo: window.location.origin})} sx={{ bgcolor: "#69A6E3", color: "white" }}>N</Avatar>
      {arrowDownIcon}
    </>
  );

  return (
    <>
      <Box data-testid="header"
        sx={{ zIndex: 1000, width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", pt: 1, mb: 10, position:"fixed", bgcolor:"white", top: 0 }}
      >
        <Container sx={{ width: "65%" }}>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={1.75}>
            <img src={logo} alt="logo" />
            </Grid>
            <Grid item xs={1}>
              <NavButton
                preElement={<img src="/images/search.png" alt="search" />}
                textColor="grey.700"
                hoverColor="background.default"
                hoverTextColor="primary.300"
              />
            </Grid>
            <Grid item xs={1.5}>
              <NavButton
                children="Explore"
                postElement={exploreModal ? arrowUpIcon : arrowDownIcon}
                textColor="textColors.highEmphasis"
                textVariant="body1"
                hoverColor="background.default"
                hoverTextColor="primary.300"
                onClick={toggleExplore}
              />
            </Grid>
            <Grid item xs>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavButton
                  children="My Library"
                  textColor="textColors.highEmphasis"
                  textVariant="body1"
                  hoverColor="background.default"
                  hoverTextColor="primary.300"
                />
                </Link>
            </Grid>
            <Grid item xs={1} justifyContent="center">
              <NavButton
                preElement={avatar}
                textColor="grey.700"
                hoverColor="background.default"
                hoverTextColor="primary.300"
              />
            </Grid>
          </Grid>
          {exploreModal && (
            <Box sx={{ position: "fixed", zIndex: 1, left: 0, width: "100%", height: "100%", overflow: "hidden",backgroundColor: "rgba(0,0,0,0.4)" }} ></Box>
          )}
        </Container>
        {exploreModal && <ExploreModal />}
      </Box>
    </>
  );
};

export default Header;
