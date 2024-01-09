import React from "react";
import { Container } from "../Container/Container";
import "./Header.scss";
import { Head_box } from "../Head_box/Head_box";

function Header() {
  return (
    <header>
      <Container>
        <Head_box />
      </Container>
    </header>
  );
}

export { Header };
