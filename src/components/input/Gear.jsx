import React, { useEffect, useReducer } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {
  ammo,
  feet,
  capes,
  hands,
  head,
  legs,
  necks,
  shields,
  body,
  weapons,
  rings
} from "../../items";

import gearReducer from "../../context/gearReducer";
import {
  EQUIP_FEET,
  EQUIP_WEAPON,
  EQUIP_AMMO,
  EQUIP_CAPE,
  EQUIP_HANDS,
  EQUIP_HEAD,
  EQUIP_LEGS,
  EQUIP_NECK,
  EQUIP_SHIELD,
  EQUIP_BODY,
  EQUIP_RING
} from "../../context/types";

const initialState = {
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
};

const Gear = () => {
  const [state, dispatch] = useReducer(gearReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form>
      <Autocomplete
        id="weapon"
        autoComplete
        includeInputInList
        options={Object.keys(weapons)}
        style={{ width: 400 }}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_WEAPON, payload: value });
        }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Weapon" margin="normal" />
        )}
      />
      <Autocomplete
        id="ammo"
        autoComplete
        includeInputInList
        options={Object.keys(ammo)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Ammunition" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_AMMO, payload: value });
        }}
      />
      <Autocomplete
        id="head"
        autoComplete
        includeInputInList
        options={Object.keys(head)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Head" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_HEAD, payload: value });
        }}
      />
      <Autocomplete
        id="neck"
        autoComplete
        includeInputInList
        options={Object.keys(necks)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Neck" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_NECK, payload: value });
        }}
      />
      <Autocomplete
        id="body"
        autoComplete
        includeInputInList
        options={Object.keys(body)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Body" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_BODY, payload: value });
        }}
      />
      <Autocomplete
        id="legs"
        autoComplete
        includeInputInList
        options={Object.keys(legs)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Legs" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_LEGS, payload: value });
        }}
      />
      <Autocomplete
        id="feet"
        autoComplete
        includeInputInList
        options={Object.keys(feet)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Feet" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_FEET, payload: value });
        }}
      />
      <Autocomplete
        id="cape"
        autoComplete
        includeInputInList
        options={Object.keys(capes)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Cape" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_CAPE, payload: value });
        }}
      />
      <Autocomplete
        id="hands"
        autoComplete
        includeInputInList
        options={Object.keys(hands)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Hands" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_HANDS, payload: value });
        }}
      />
      <Autocomplete
        id="shield"
        autoComplete
        includeInputInList
        options={Object.keys(shields)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Shield" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_SHIELD, payload: value });
        }}
      />
      <Autocomplete
        id="ring"
        autoComplete
        includeInputInList
        options={Object.keys(rings)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Ring" margin="normal" />
        )}
        onChange={(_, value) => {
          dispatch({ type: EQUIP_RING, payload: value });
        }}
      />
    </form>
  );
};

export default Gear;
