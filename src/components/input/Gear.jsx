import React, { useState, useEffect } from "react";
import {
  ammo,
  feet,
  capes,
  hands,
  head,
  legs,
  neck,
  shields,
  body,
  weapons,
  rings
} from "../../items";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Gear = () => {
  const [gear, setGear] = useState({
    weapon: "",
    ammo: "",
    head: "",
    neck: "",
    body: "",
    legs: "",
    feet: "",
    cape: "",
    hands: "",
    ring: "",
    shield: ""
  });

  useEffect(() => {
    console.log(gear);
  }, [gear]);

  return (
    <form>
      <Autocomplete
        id="weapon"
        autoComplete
        includeInputInList
        options={Object.keys(weapons)}
        style={{ width: 400 }}
        onChange={(e, value) => {
          setGear({ ...gear, weapon: value });
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
          setGear({ ...gear, ammo: value });
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
          setGear({ ...gear, head: value });
        }}
      />
      <Autocomplete
        id="neck"
        autoComplete
        includeInputInList
        options={Object.keys(neck)}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField {...params} fullWidth label="Neck" margin="normal" />
        )}
        onChange={(_, value) => {
          setGear({ ...gear, neck: value });
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
          setGear({ ...gear, body: value });
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
          setGear({ ...gear, legs: value });
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
          setGear({ ...gear, feet: value });
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
          setGear({ ...gear, cape: value });
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
          setGear({ ...gear, hands: value });
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
          setGear({ ...gear, shield: value });
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
          setGear({ ...gear, rings: value });
        }}
      />
    </form>
  );
};

export default Gear;
