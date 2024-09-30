import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import Repository from "../Repository/Repository";

export default function Repositories({ repositories, filter }) {
  const repos = repositories.filter((repository) => filter === undefined || filter === repository.language).map((repository) => <Repository key={repository.id} repository={repository}/>)
  return (
    <Container>
      {repos}
    </Container>
  );
} 

Repositories.defaultProps = {
  filter: undefined,
}
Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired, 
      lang: PropTypes.string,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string,
};