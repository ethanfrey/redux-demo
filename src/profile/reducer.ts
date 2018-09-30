import { ActionType } from "typesafe-actions";

import { ADD, TOGGLE } from "../constants";
import { Todo } from "../state";
import * as actions from "./actions";

type TodosAction = ActionType<typeof actions>;
type State = ReadonlyArray<Todo>;

export function reducer(state: State = [], action: TodosAction): State {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case TOGGLE:
      return state.map(
        item => (item.title === action.payload ? { ...item, completed: !item.completed } : item),
      );
  }
}
