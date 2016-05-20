export const HEROES = {
  genji: {
    name: "Genji",
    role: "offense",
  },
  mccree: {
    name: "McCree",
    role: "offense",
  },
  pharah: {
    name: "Pharah",
    role: "offense",
  },
  reaper: {
    name: "Reaper",
    role: "offense",
  },
  soldier76: {
    name: "Soldier 76",
    role: "offense",
  },
  tracer: {
    name: "Tracer",
    role: "offense",
  },

  bastion: {
    name: "Bastion",
    role: "defense",
  },
  hanzo: {
    name: "Hanzo",
    role: "defense",
  },
  junkrat: {
    name: "Junkrat",
    role: "defense",
  },
  mei: {
    name: "Mei",
    role: "defense",
  },
  torbjorn: {
    name: "Torbjörn",
    role: "defense",
  },
  widowmaker: {
    name: "Widowmaker",
    role: "defense",
  },

  dva: {
    name: "D.Va",
    role: "tank",
  },
  reinhardt: {
    name: "Reinhardt",
    role: "tank",
  },
  roadhog: {
    name: "Roadhog",
    role: "tank",
  },
  winston: {
    name: "Winston",
    role: "tank",
  },
  zarya: {
    name: "Zarya",
    role: "tank",
  },


  lucio: {
    name: "Lucio",
    role: "support",
  },
  mercy: {
    name: "Mercy",
    role: "support",
  },
  symmetra: {
    name: "Symmetra",
    role: "support",
  },
  zenyatta: {
    name: "Zenyatta",
    role: "support",
  },
};

export const HERO_ORDER = [
  "genji",
  "mccree",
  "pharah",
  "reaper",
  "soldier76",
  "tracer",

  "bastion",
  "hanzo",
  "junkrat",
  "mei",
  "torbjorn",
  "widowmaker",

  "dva",
  "reinhardt",
  "roadhog",
  "winston",
  "zarya",

  "lucio",
  "mercy",
  "symmetra",
  "zenyatta",
];

export const ROLES = {
  offense: {
    name: "Offense",
  },
  defense: {
    name: "Defense",
  },
  tank: {
    name: "Tank",
  },
  support: {
    name: "Support",
  },
};

export const ROLE_ORDER = [
  "offense",
  "defense",
  "tank",
  "support",
];


export function getPortrait(hero) {
  return `/dist/`
};
