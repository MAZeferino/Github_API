import React from "react";
import PropTypes from "prop-types";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";
import { langColors } from "../../services/config";

export default function Repository({ repository }) {
  const color = langColors[repository.lang.toLowerCase()]
  return (
    <Container color={color}>
        <Name>{repository.name}</Name>
        <Description>{repository.description}</Description>
        <Footer color={color}>
            <Lang>{repository.lang}</Lang>
            <Link href={repository.url} target="_blank">Ver</Link>
        </Footer>
    </Container>
  );
} 

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired, 
    lang: PropTypes.string,
  }).isRequired,
};