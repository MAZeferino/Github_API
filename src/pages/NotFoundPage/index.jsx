import { React, useState } from "react";
import githubLogo from '../../assets/images/github-logo.svg'
import { Container, Logo, Title, Form, Input, Button } from "./styles";

export default function NotFoundPage() {
  const [nick, setNick] = useState('');

  const redirect = (event) => {
    if (event.code === 'Enter') {
      const url = `/${nick}/repositories`;
      window.location.href = url;
    }
  }

  return (
    <Container>
      <p>TESTEEEEE</p>
    </Container>
  );
}
