import React from "react";
import { Route } from "react-router-dom";
import { AuthConsumer } from "../providers/authProvider";

export const PrivateRoute = ({ children }) => {
 
  return (
    <React.Fragment>
      <AuthConsumer>
        {({ isAuthenticated, signinRedirect }) => {
          if (isAuthenticated()) {
            return <div>{children}</div>;
          } else {
            signinRedirect();
            return <span>loading</span>;
          }
        }}
      </AuthConsumer>
    </React.Fragment>
  );
};
