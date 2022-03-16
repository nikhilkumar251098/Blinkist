import { Box, Input, InputAdornment } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";

interface InputProps {
  url?: string;
  alt?: string;
  text: string;
}

const InputField: React.FC<InputProps> = ({ url, alt, text }) => {
  return (
    <Input
      data-testid="input"
      sx={{ pb: 2 }}
      startAdornment={
        <InputAdornment position="start">
          <Box sx={{ width: "25px" }}>
            <img src={url} alt={alt} />
          </Box>
          <TypographyComponent
            variant="subtitle1"
            color="textColors.highEmphasis"
            children={text}
          />
        </InputAdornment>
      }
    />
  );
};

export default InputField;
