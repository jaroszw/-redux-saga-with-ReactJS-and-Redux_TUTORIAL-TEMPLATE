import * as type from "../types";

const initalState = {
  users: [],
};

export default function uers(state = initalState, action) {
  switch (action.type) {
    case type.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
