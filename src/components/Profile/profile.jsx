import React from "react";
import { MdGroup, MdLocationCity, MdWork,MdLink} from 'react-icons/md'
import { Container, Header, Avatar, Nick, Name, Inner, Data  } from "./styles";
import Logo from "../../assets/images/github-logo.svg"

export default function Profile() {

  return (
    <Container>
      <Header>
        <Avatar src={Logo}/>
        <Nick>Test</Nick>
        <Name>Usuário</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>
          &nbsp;30&nbsp;<i>seguidores</i>&nbsp; &middot; 10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20}/> 
          &nbsp;SoftExpert
        </Data>
        <Data>
          <MdLocationCity size={20}/> 
          &nbsp;Joinville
          </Data>
        <Data>
          <MdLink size={20}/>
          <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">&nbsp;teste</a>
        </Data>
      </Inner>
    </Container>
  );
} 