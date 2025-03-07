import React from "react";
import { Button } from "@mui/material";

const Square = ({ value, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: 100,
        height: 100,
        fontSize: "2em",
        backgroundColor: value ? (value === "X" ? "#ff1744" : "#2979ff") : "#fff",
        color: "#000",  // ✅ Ensures text is always black
        border: "2px solid #000",
        "&:hover": {
          backgroundColor: value ? (value === "X" ? "#d50000" : "#1565c0") : "#f5f5f5",
        },
      }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default Square;
