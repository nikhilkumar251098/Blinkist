import { Button } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";
import { styled, experimental_sx as sx } from "@mui/system";

interface ButtonProps {
  textColor?: string;
  preElement?: JSX.Element;
  children?: string;
  postElement?: JSX.Element;
  hoverColor?: string;
  hoverTextColor?: string;
  onClick?: () => void;
  width?: string;
  borderColor?: string;
  bgcolor?: string;
  borderHover?: boolean;
  borderBottom?: boolean;
  height?: string;
  align?: "flex-start"| "flex-end"| "center"| "stretch"| "space-between"| "space-around"| "space-evenly";
  variant?: "text" | "outlined" | "contained";
  textVariant?: "button"| "caption"| "h1"| "h2"| "h3" | "h4"| "h5"| "h6"| "inherit"| "subtitle1"| "subtitle2"| "body1"| "body2"| "overline";
}

const NavButton: React.FC<ButtonProps> = ({
  textColor,preElement,
  variant = "text",
  children,
  postElement,
  textVariant,
  hoverColor,
  borderColor,
  hoverTextColor,
  onClick,
  width,
  bgcolor,
  align,
  height,
  borderBottom = false,
  borderHover = true,
}) => {
  const StyledNavButton = styled(Button)(
    sx({
      textTransform: "none",
      display: "flex",
      justifyContent: align,
      color: textColor,
      bgcolor: bgcolor,
      height: height,
      width: width,
      borderBottomColor: hoverTextColor,
    })
  );

  const borderBottomHover: any = {
    ":hover": {
      bgcolor: hoverColor,
      borderBottomWidth: 2,
      borderBottomStyle: "solid",
    },
  };

  const permanentBorder: any = {
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  };

  return (
    <>
      <StyledNavButton
        variant={variant}
        onClick={onClick}
        sx={borderHover ? borderBottomHover : permanentBorder}
      >
        {preElement}
        <TypographyComponent variant={textVariant} children={children} />
        {postElement}
      </StyledNavButton>
    </>
  );
};

export default NavButton;
