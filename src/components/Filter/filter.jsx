import React from "react";
import PropTypes from "prop-types";

import { Container, Selector, Cleaner } from "./styles"

export default function Filter({ langs, filter, onclick }) {

  const selectors = langs.map((lang) => 
    <Selector key={lang.name.toLowerCase()} color={lang.color} className={filter === lang.name ? 'selected' : ''} onClick={() => onclick && onclick(lang.name)}>
      <span>{lang.name}</span><span>{lang.count}</span>
    </Selector>
  )
  
  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onclick && onclick(undefined)}>Limpar</Cleaner>
    </Container>
  );
} 
Filter.defaultProps = {
  filter: null,
  onclick: null,
}

Filter.propTypes = {
  langs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string, 
    }).isRequired,
  ).isRequired,
  filter: PropTypes.string,
  onclick: PropTypes.func,
}