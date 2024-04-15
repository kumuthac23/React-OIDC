import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <button
        onClick={handleLoginClick}
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          padding: "15px",
          width: "10%",
          cursor:"pointer"
        }}
      >
        Login
      </button>
    </Box>
  );
}

export default Home;
