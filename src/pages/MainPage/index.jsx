import React from "react";
import { MdSearch } from "react-icons/md";
import githubLogo from '../../assets/images/github-logo.svg'
import { Container, Logo, Title, Form, Input, Button } from "./styles";

export default function MainPage() {
  return (
    <Container>
      <Logo
        src={githubLogo}
        alt="Github"
      />
      <Title>Github User API</Title>
      <Form>
        <Input placeholder="Nickname..." />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
