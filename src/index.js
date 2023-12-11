import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { PublicClientApplication, EventType } from "@azure/msal-browser";

const pca = new PublicClientApplication({
  auth: {
    clientId: "ecbc0da6-02d3-47ae-b345-f899cef8506d",
    authority:
      "https://login.microsoftonline.com/common",
    redirectUri: "/",
    // postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPII) => {
        console.log(message);
      },
      logLevel: "Verbose",
    },
  },
});

pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    pca.setActiveAccount(event.payload.account);
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App msalInstance={pca} />{" "}
      </ThemeProvider>{" "}
    </BrowserRouter>{" "}
  </React.StrictMode>
);
