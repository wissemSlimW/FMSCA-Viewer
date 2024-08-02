import { SxProps, Theme } from "@mui/material";
import { FONTS, COLORS } from "./styles";
export const style = {
  main: {
    paddingInline: "30px",
    paddingBlock: "20px",
  },
  header: {
    paddingBlock: "10px",
    color: COLORS.primary,
    fontFamily: FONTS.primary,
  },
} satisfies Record<string, SxProps<Theme>>;
