import React from "react";
import { Container, Name, Description, Footer, Lang, Link } from "./styles";

export default function Repository() {

  return (
    <Container color="#F83600">
        <Name>Rep</Name>
        <Description>Repository desc</Description>
        <Footer color="#F83600">
            <Lang>Lang</Lang>
            <Link href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" target="_blank">3</Link>
        </Footer>
    </Container>
  );
} 