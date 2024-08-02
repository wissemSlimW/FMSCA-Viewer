import { SxProps, Theme } from "@mui/material";
import { COLORS, FONTS, SHADOWS } from "../../styles";

export const style: SxProps<Theme> = {
  borderRadius: "10px",
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "white",
    fontFamily: FONTS.primary,
    fontWeight: 500,
  },
  "& .MuiDataGrid-cell ": {
    fontFamily: FONTS.primary,
    fontWeight: 400,
  },
  "& .MuiTablePagination-toolbar>*": {
    fontFamily: FONTS.primary,
    fontWeight: 400,
  },
  "& .MuiDataGrid-scrollbar": {
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": SHADOWS.primaryInner,
      borderRadius: 10,
      backgroundColor: COLORS.standart,
    },

    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: COLORS.standart,
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      "-webkit-box-shadow": SHADOWS.primaryInner,
      backgroundColor: COLORS.primary,
    },
    "&::-webkit-scrollbar:horizontal": {
      height: "6px",
      backgroundColor: COLORS.standart,
    },
  },
  "&&& .MuiDataGrid-row--borderBottom": {
    backgroundColor: COLORS.primary,
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "&>:nth-child(even)": {
      backgroundColor: COLORS.extraLightPrimary,
      "&:hover": {
        backgroundColor: COLORS.shadow,
      },
    },
  },
};
