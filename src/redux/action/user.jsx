import { SET_USER } from "../actionTypes";
import { SET_USER_INFO } from "../actionTypes";

export function setUser(info) {
  return {
    type: SET_USER,
    info,
  };
}

export function setUserInfo(info) {
  return {
    type: SET_USER_INFO,
    info,
  };
}
