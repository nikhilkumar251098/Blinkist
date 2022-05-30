import { Button } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";
import React from "react";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";

interface ButtonProps {
  disabled?:boolean;
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
  onClick,
  height,
  hoverColor,
  hoverTextColor,
  borderColor = "",
  isBorder = false,
  align,
  disabled,
}) => {
  const StyledButton = styled(Button)(
    sx({
      textTransform: "none",
      display: "flex",
      justifyContent: align,
      color: textColor,
      bgcolor: "transparent",
      width: "320px",
      pl: "0px",
      ml:"0px",
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
        disabled={disabled}
      >
        {preElement}
        <TypographyComponent variant={textVariant} children={children} />
      </StyledButton>
    </>
  );
};

export default FilledButton;
