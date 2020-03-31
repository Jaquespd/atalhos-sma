import React from 'react';

import api from '../../services/api';

export default function Certidoes() {
  async function handleOpenPages() {
    // const response = await api.get(
    //   'https://servicos.receita.fazenda.gov.br/Servicos/certidao/CndConjuntaInter/InformaNICertidao.asp?Tipo=1',
    //   {
    //     headers: {
    //       'Access-Control-Allow-Origin': 'http://localhost:3000',
    //       'Access-Control-Allow-Credentials': 'true',
    //       'Access-Control-Allow-Methods':
    //         'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //       'Access-Control-Max-Age': '86400'
    //     }
    //   }
    // );

    const response = await api.get('http://mprn.mp.br/portal/', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    });
    console.log(response);
  }

  return (
    <button type="button" onClick={handleOpenPages}>
      CERTIDAO
    </button>
  );
}
