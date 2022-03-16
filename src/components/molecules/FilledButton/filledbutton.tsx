import { Button } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";
import React from "react";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";

interface ButtonProps {
  textColor?: string;
  preElement?: JSX.Element;
  children?: string;
  postElement?: JSX.Element;
  borderColor?: string;
  bgcolor?: string;
  isBorder?: boolean;
  onClick?: () => void;
  width?: string;
  height?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  variant?: "text" | "outlined" | "contained";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  textVariant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline";
}

const FilledButton: React.FC<ButtonProps> = ({
  variant = "contained",
  textColor,
  preElement,
  children,
  textVariant,
  bgcolor,
  onClick,
  width,
  height,
  hoverColor,
  hoverTextColor,
  borderColor = "",
  isBorder = false,
  align,
}) => {
  const StyledButton = styled(Button)(
    sx({
      textTransform: "none",
      display: "flex",
      justifyContent: align,
      color: textColor,
      bgcolor: bgcolor,
      width: width,
      height: height,
      ":hover": {
        bgcolor: hoverColor,
        color: hoverTextColor,
      },
    })
  );

  const border = {
    borderColor: borderColor,
    borderWidth: 1,
    borderStyle: "solid",
  };

  return (
    <>
      <StyledButton
        variant={variant}
        onClick={onClick}
        style={isBorder ? border : undefined}
      >
        {preElement}
        <TypographyComponent variant={textVariant} children={children} />
      </StyledButton>
    </>
  );
};

export default FilledButton;
