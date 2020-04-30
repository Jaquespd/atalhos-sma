import search from '../assets/search.svg';
import email from '../assets/email-white-18dp.svg';
import mopa from '../assets/format_list_bulleted-white-18dp.svg';
import almoxarifado from '../assets/home_work-white-18dp.svg';
import telefone from '../assets/phone_in_talk-white-18dp.svg';
import protocolo from '../assets/sync-white-18dp.svg';
import ponto from '../assets/alarm-white-18dp.svg';
import sofc from '../assets/account_balance-white-18dp.svg';
import solar from '../assets/important_devices-white-18dp.svg';
import certidoes from '../assets/library_books-white-18dp.svg';

export const dataAdministrativos = [
  {
    href: 'http://protocoloweb.mprn.mp.br/',
    src: search,
    title: 'Consulta de Processos',
  },
  {
    href:
      'https://almoxarifado.mprn.mp.br/logonsetor.aspx?dt=24/03/2020%2019:49:10',
    src: almoxarifado,
    title: 'Almoxarifado',
  },
  {
    href: 'https://sofc.mprn.mp.br/sofc2020/',
    src: sofc,
    title: 'SOFC',
  },
  {
    href: 'https://emp.mprn.mp.br/',
    src: protocolo,
    title: 'E-MP',
  },
  {
    href: 'https://protocolo.mprn.mp.br/',
    src: protocolo,
    title: 'Protocolo',
  },
  {
    href: null,
    src: certidoes,
    title: 'Certidões',
    onclick: true,
  },
];

export const dataOperacional = [
  {
    href: 'https://atendemp.mprn.mp.br/otrs/index.pl',
    src: mopa,
    title: 'AtendeMP',
  },

  {
    href: 'https://mopa-2f790.firebaseapp.com/',
    src: mopa,
    title: 'MOPA',
  },
  {
    href: 'https://monitoramento.sicessolar.com.br/',
    src: solar,
    title: 'Energia Solar',
  },
  {
    href: 'https://www.isolarcloud.com/',
    src: solar,
    title: 'Energia Solar',
  },
  {
    href: 'https://srv-zabbix.mprn.mp.br/',
    src: solar,
    title: 'Status da Rede',
  },
];

export const dataOutros = [
  {
    href:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRfZ08qGTJYoWJFTqdUpjAIpBwE977ekYtQoV8os-OdkhoaR5A6-OsYfhq3Alo85wULUt9u8IJGaUkL/pubhtml',
    src: telefone,
    title: 'Telefones',
  },
  {
    href: 'https://intranet.mp.rn.gov.br/ponto/ponto.aspx',
    src: ponto,
    title: 'Espelho do Ponto',
  },
  {
    href: 'https://gmail.com/',
    src: email,
    title: 'Email',
  },
];
