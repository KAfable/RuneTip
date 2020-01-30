import {
  EQUIP_FEET,
  EQUIP_WEAPON,
  // EQUIP_AMMO,
  EQUIP_CAPE,
  EQUIP_HANDS,
  EQUIP_HEAD,
  EQUIP_LEGS,
  EQUIP_NECK,
  EQUIP_SHIELD,
  EQUIP_BODY,
  EQUIP_RING
} from "./types";

import {
  // ammo,
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
} from "../items";

export default (state, action) => {
  switch (action.type) {
    case EQUIP_WEAPON:
      return {
        ...state,
        gear: {
          ...state.gear,
          weapon: weapons[action.payload]
        }
      };
    case EQUIP_BODY:
      return {
        ...state,
        gear: {
          ...state.gear,
          body: body[action.payload]
        }
      };
    case EQUIP_CAPE:
      return {
        ...state,
        gear: {
          ...state.gear,
          cape: capes[action.payload]
        }
      };
    case EQUIP_HANDS:
      return {
        ...state,
        gear: {
          ...state.gear,
          hands: hands[action.payload]
        }
      };
    case EQUIP_HEAD:
      return {
        ...state,
        gear: {
          ...state.gear,
          head: head[action.payload]
        }
      };
    case EQUIP_LEGS:
      return {
        ...state,
        gear: {
          ...state.gear,
          legs: legs[action.payload]
        }
      };
    case EQUIP_SHIELD:
      return {
        ...state,
        gear: {
          ...state.gear,
          shield: shields[action.payload]
        }
      };
    case EQUIP_RING:
      return {
        ...state,
        gear: {
          ...state.gear,
          ring: rings[action.payload]
        }
      };
    case EQUIP_NECK:
      return {
        ...state,
        gear: {
          ...state.gear,
          neck: necks[action.payload]
        }
      };
    case EQUIP_FEET:
      return {
        ...state,
        gear: {
          ...state.gear,
          feet: feet[action.payload]
        }
      };
    default:
      return state;
  }
};
