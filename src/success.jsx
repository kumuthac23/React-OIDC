import React, { useEffect, useState } from "react";
import { AuthConsumer } from "./providers/authProvider";
import { useNavigate } from "react-router-dom";
import AuthService from "./authService";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";

function Success() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authService = new AuthService();
    authService.getUser().then((user) => {
      setUserInfo(user);
    });
  }, []);

  useEffect(() => {
    const hashParams = new URLSearchParams(location.hash.substring(1));
    const accessToken = hashParams.get("access_token");
    console.log("accessToken", accessToken);
    if (accessToken) {
      localStorage.setItem("id_token", accessToken);
    }
  }, [location.hash]);

  return (
    <AuthConsumer>
      {({ logout }) => {
        const handleLogout = () => {
          logout();
          navigate("/");
        };

        return (
          <Box>
            <AppBar position="static">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ marginRight: "70px" }}>
                      {userInfo && (
                        <Typography>{userInfo.profile.name}</Typography>
                      )}
                    </Box>
                    <Box sx={{ marginRight: "30px", cursor: "pointer" }}>
                      <LogoutIcon onClick={handleLogout} />
                    </Box>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
            <Typography variant="h3" sx={{textAlign:"center",color:"blue",marginTop:"100px"}}>Welcome to 3Analytics</Typography>
          </Box>
        );
      }}
    </AuthConsumer>
  );
}

export default Success;
