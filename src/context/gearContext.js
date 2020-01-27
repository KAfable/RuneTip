import { createContext } from "react";

export default createContext({
  gear: {
    weapon: {},
    ammo: {},
    head: {},
    neck: {},
    body: {},
    legs: {},
    feet: {},
    cape: {},
    hands: {},
    ring: {},
    shield: {}
  },
  gearStats: {
    aS: "", // attack speed
    ac: 0, // crush attack
    al: 0, // slash attack
    am: 0, // magic attack bonus
    ar: 0, // ranged attack
    at: 0, // stab attack
    bm: 0, // magic str % bonus
    br: 0, // ranged str bonus
    bs: 0, // str bonus
    dc: 0, // crush defense
    dl: 0, // slash defense
    dm: 0, // magic defense
    dr: 0, // ranged defense
    dt: 0, // stab defense
    pr: 0, // prayer bonus
    vi: 0 // ??
  }
});
