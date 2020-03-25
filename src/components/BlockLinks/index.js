import React from 'react';

import { Container, Badge } from './styles';

export default function BlockLinks({ data }) {
  return (
    <Container>
      {data.map((a, index) => (
        <Badge
          key={index}
          className="App-link"
          href={a.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={a.src} alt="" />
          <span>{a.title}</span>
        </Badge>
      ))}
    </Container>
  );
}
