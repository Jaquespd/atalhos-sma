import React from 'react';

import { Container, Badge } from './styles';

export default function BlockLinks({ data }) {
  function handleOpenWindow() {
    alert(
      'Serão abertas varias abas, é necessario verificar no bloqueador de popup. Caso deseje evitar o bloqueio nas próximas vezes, basta marcar PERMITIR no bloqueador.'
    );

    window.open(
      'https://directa.natal.rn.gov.br/open.do?sys=DIR&idformulario=100'
    );

    window.open(
      'https://uvt2.set.rn.gov.br/#/services/certidao-negativa/emitir'
    );

    window.open('http://www.tst.jus.br/certidao');

    window.open(
      'https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf'
    );

    window.open(
      'http://servicos.receita.fazenda.gov.br/Servicos/certidao/CndConjuntaInter/InformaNICertidao.asp?Tipo=1'
    );
  }

  return (
    <Container>
      {data.map((a, index) => {
        if (a.onclick) {
          return (
            <Badge key={index} type="button" onClick={handleOpenWindow}>
              <img src={a.src} alt="" />
              <span>{a.title}</span>
            </Badge>
          );
        } else {
          return (
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
          );
        }
      })}
    </Container>
  );
}
