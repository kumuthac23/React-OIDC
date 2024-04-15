import React, { useEffect } from "react";
import { AuthConsumer } from "./providers/authProvider";
import { useNavigate } from "react-router-dom";

function Demo() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/");
  // }, []);

  return (
    // <AuthConsumer>
    //   {({ isAuthenticated, signinRedirect }) => {
    //     if (!isAuthenticated()) {
    //       signinRedirect();
    //     }
    //     return null;
    //   }}
    // </AuthConsumer>
    <div>Demo</div>
  );
}

export default Demo;
