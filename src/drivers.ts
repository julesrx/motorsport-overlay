import { Driver, Team } from './types';

const redbull: Team = { uid: 'red-bull-racing', name: 'Red Bull Racing' };
const ferrari: Team = { uid: 'ferrari', name: 'Ferrari' };
const mercedes: Team = { uid: 'mercedes', name: 'Mercedes' };
const mclaren: Team = { uid: 'mclaren', name: 'McLaren' };
const alpine: Team = { uid: 'alpine', name: 'Alpine' };
const alfaromeo: Team = { uid: 'alfa-romeo', name: 'Alfa Romeo' };
const alphatauri: Team = { uid: 'alphatauri', name: 'AlphaTauri' };
const haasf1team: Team = { uid: 'haas-f1-team', name: 'Haas F1 Team' };
const astonmartin: Team = { uid: 'aston-martin', name: 'Aston Martin' };
const williams: Team = { uid: 'williams', name: 'Williams' };

const f1: Driver[] = [
  { designation: 'VER', number: '33', position: 1, name: 'Max Verstappen', team: redbull },
  { designation: 'PER', number: '11', position: 2, name: 'Sergio Perez', team: redbull },
  { designation: 'LEC', number: '16', position: 3, name: 'Charles Leclerc', team: ferrari },
  { designation: 'SAI', number: '55', position: 4, name: 'Carlos Sainz', team: ferrari },
  { designation: 'RUS', number: '63', position: 5, name: 'George Russell', team: mercedes },
  { designation: 'HAM', number: '44', position: 6, name: 'Lewis Hamilton', team: mercedes },
  { designation: 'NOR', number: '4', position: 7, name: 'Lando Norris', team: mclaren },
  { designation: 'BOT', number: '77', position: 8, name: 'Valtteri Bottas', team: alfaromeo },
  { designation: 'OCO', number: '31', position: 9, name: 'Esteban Ocon', team: alpine },
  { designation: 'ALO', number: '14', position: 10, name: 'Fernando Alonso', team: alpine },
  { designation: 'GAS', number: '10', position: 11, name: 'Pierre Gasly', team: alphatauri },
  { designation: 'MAG', number: '20', position: 12, name: 'Kevin Magnussen', team: haasf1team },
  { designation: 'VET', number: '5', position: 13, name: 'Sebastian Vettel', team: astonmartin },
  { designation: 'RIC', number: '3', position: 14, name: 'Daniel Ricciardo', team: mclaren },
  { designation: 'TSU', number: '22', position: 15, name: 'Yuki Tsunoda', team: alphatauri },
  { designation: 'ZHO', number: '24', position: 16, name: 'Guanyu Zhou', team: alfaromeo },
  { designation: 'MSC', number: '47', position: 17, name: 'Mick Schumacher', team: haasf1team },
  { designation: 'ALB', number: '23', position: 18, name: 'Alexander Albon', team: williams },
  { designation: 'STR', number: '18', position: 19, name: 'Lance Stroll', team: astonmartin },
  { designation: 'LAT', number: '6', position: 20, name: 'Nicholas Latifi', team: williams }
];

export { f1 };
