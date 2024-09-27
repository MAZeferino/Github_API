import React from "react";
import PropTypes from "prop-types";

import { MdGroup, MdLocationCity, MdWork,MdLink} from 'react-icons/md'
import { Container, Header, Avatar, Nick, Name, Inner, Data  } from "./styles";

export default function Profile({ user }) {

  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url}/>
        <Nick>{user.login}</Nick>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data><MdGroup size={20}/>&nbsp;{user.followers}&nbsp;<i>seguidores</i>&nbsp; &middot; {user.following}&nbsp;<i>seguindo</i></Data>
        {user.company &&(<Data><MdWork size={20}/>&nbsp;{user.company}</Data>)}
        {user.location &&(<Data><MdLocationCity size={20}/>&nbsp;{user.location}</Data>)}
        {user.blog &&(<Data><MdLink size={20}/><a href={`\\${user.blog}`}>&nbsp;{user.blog}</a></Data>)}
      </Inner>
    </Container>
  );
} 

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};