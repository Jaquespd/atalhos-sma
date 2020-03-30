import React from 'react';

import api from '../../services/api';

// import BlockLinks from '../BlockLinks';

// import { Container, Badge, Group } from './styles';

// import logo from '../../assets/search.svg';

export default function Certidoes() {
  async function handleOpenPages() {
    const response = await api.get(
      'http://servicos.receita.fazenda.gov.br/Servicos/certidao/CndConjuntaInter/InformaNICertidao.asp?Tipo=1'
    );

    console.log(response);
  }

  return (
    <button type="button" onClick={handleOpenPages}>
      CERTIDAO
    </button>
  );
}
