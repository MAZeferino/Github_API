import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Normalize } from "styled-normalize";
import { AppRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}
