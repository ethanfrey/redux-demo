import { createAsyncAction } from "typesafe-actions";

import { User } from "./state";

export const fetchUsers = createAsyncAction(
  "FETCH_USERS_PENDING",
  "FETCH_USERS_FULFILLED",
  "FETCH_USERS_REJECTED",
)<void, ReadonlyArray<User>, Error>();
