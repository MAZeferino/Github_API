import React from "react";
import { Container, Selector, Cleaner } from "./styles"

export default function Filter() {
  const langs = [
    {name: 'Javascripts', count: 5, color: '#FCC419'},
    {name: 'Shell', count: 2, color: '#7E5CEF'},
    {name: 'PHP', count: 1, color: '#E03131'},
  ]

  const selectors = langs.map((lang) => <Selector key={lang.name.toLowerCase()} color={lang.color}><span>{lang.name}</span><span>{lang.count}</span></Selector>)
  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
} 