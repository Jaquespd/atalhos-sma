import React from 'react';

import api from '../../services/api';

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
