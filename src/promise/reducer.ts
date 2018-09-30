import { ActionType } from "typesafe-actions";

import * as actions from "./actions";
import { User } from "./state";

type PromiseAction = ActionType<typeof actions.fetchUsers>;
interface State {
  readonly users: ReadonlyArray<User>;
  readonly error?: Error;
  readonly inProgress: boolean;
}

export function reducer(state: State = { users: [], inProgress: false }, action: PromiseAction): State {
  switch (action.type) {
    case "FETCH_USERS_FULFILLED":
      return { users: action.payload, inProgress: false };
    case "FETCH_USERS_REJECTED":
      return { ...state, error: action.payload, inProgress: false };
    case "FETCH_USERS_PENDING":
      return { ...state, inProgress: true };
  }
}
