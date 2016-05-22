// This file contains a bunch of generator functions that are meant to
// mock real data. Ideally by launch this file is dead and gone.

import { REGIONS } from "shared/regions";
import { TYPES } from "shared/profile";
import { HEROES, HERO_LIMIT, ROLES } from "shared/heroes";

function rand(min, max) {
  let rando = 0;
  if (max) {
    rando = parseInt(Math.random() * max, 10);
    rando = Math.max(min, rando);
  }
  else {
    rando = parseInt(Math.random() * min, 10);
  }
  return rando;
}

function randsel(obj, wildcard) {
  if (obj.constructor === Array) {
    const list = obj.slice(0);
    if (wildcard) {
      list.push(wildcard);
    }
    return list[rand(list.length)];
  }
  else {
    return randsel(Object.keys(obj));
  }
}

function _generateId(max = 99999999) {
  return `${rand(max)}`;
}

function _generateUsername() {
  const firsts = [
    "Blast",
    "Crunk",
    "Blammo",
    "Harry",
    "Bongo",
    "Paulie",
    "Holy",
    "Grizzly",
  ];
  const lasts = [
    "Baboosh",
    "PurpleNurple",
    "Nipnog",
    "Shitsnacks",
    "Taco",
    "asaurous",
    "Squared",
    "Cubed",
    "InABox",
  ];
  return randsel(firsts) + randsel(lasts);
}

function _generateGroupName() {
  const firsts = [
    "Come join and",
    "LF2M to",
    "LF4M then we",
    "LF3M to",
    "Join if you like to",
    "Aww yeah let's",
  ];
  const lasts = [
    "kick butt",
    "smash nerds",
    "win vidya",
    "battle doods",
    "crush our foes",
  ];
  return `${randsel(firsts)} ${randsel(lasts)}`;
}

function _generateTeamName() {
  const firsts = [
    "The Fierce",
    "Mighty",
    "Unstoppable",
    "Mad Decent",
    "Shitstomping",
  ];
  const lasts = [
    "Ass Blasters",
    "Battle Doods",
    "H4X0RS",
    "Face Crushers",
    "Home Wreckers",
    "Winstonians",
  ];
  return `${randsel(firsts)} ${randsel(lasts)}`;
}

function _generateFavoriteHeroes() {
  const length = rand(HERO_LIMIT);
  const heroes = [];
  for (let i = 0; i < length; i++) {
    heroes.push(randsel(HEROES));
  }
  heroes.filter((hero, idx) => {
    return heroes.indexOf(hero) === idx;
  });
  return heroes;
}

function _getMeThisMany(count, fn, args) {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(fn(args));
  }
  return list;
}

export function generatePlayer(attrs = {}) {
  return {
    id: _generateId(),
    name: _generateUsername(),
    hash: `#${_generateId(1500)}`,
    profile: {
      type: randsel(TYPES),
      role: randsel(ROLES, null),
      region: randsel(REGIONS),
      heroes: _generateFavoriteHeroes(),
      microphone: randsel([true, false]),
    },
    ...attrs,
  };
}

export function generatePlayers(count, attrs = {}) {
  return _getMeThisMany(count, generatePlayer, attrs);
}

export function generateGroup(attrs = {}) {
  const players = _getMeThisMany(rand(1, 6), generatePlayer);

  return {
    id: _generateId(),
    name: _generateGroupName(),
    owner: players[0],
    players: players,
    type: randsel(TYPES),
    region: randsel(REGIONS),
    microphone: randsel([true, false]),
    ...attrs,
  };
}

export function generateGroups(count, attrs = {}) {
  return _getMeThisMany(count, generateGroup, attrs);
}

export function generateTeam(attrs = {}) {
  const players = _getMeThisMany(rand(1, 12), generatePlayer);

  return {
    id: _generateId(),
    name: _generateTeamName(),
    logo: "/path/to/logo.png",
    description: "The best team in town for sure.",
    owner: players[0],
    players: players,
    type: randsel(TYPES),
    region: randsel(REGIONS),
    microphone: randsel([true, false]),
    ...attrs,
  };
}

export function generateTeams(count, attrs = {}) {
  return _getMeThisMany(count, generateTeam, attrs);
}
