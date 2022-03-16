import React from "react";
import { Typography } from "@mui/material";

interface TypographyProps {
  variant:| "h1"| "h2"| "h3"| "h4"| "h5"| "h6"| "subtitle1"| "subtitle2"| "body1"| "body2"| "caption"| "button"| "overline"| "inherit"| undefined;
  children?: string;
  color?: string;
  width?: string;
  onClick?: Function;
}

const TypographyComponent: React.FC<TypographyProps> = ({variant, children, color, width, onClick=()=> {onClick()}}) => {
  return (
    <Typography onClick={()=>onClick()} variant={variant} color={color} sx={{ textAlign: "left", width: width }} data-testid="typography">
      {children}
    </Typography>
  );
};

export default TypographyComponent;
