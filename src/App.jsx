import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}
