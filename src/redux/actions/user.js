import * as type from "../types";

export const getUsers = (users) => ({
  type: type.GET_USERS,
  payload: users,
});
