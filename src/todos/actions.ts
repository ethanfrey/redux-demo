import { action } from "typesafe-actions";

import { ADD, TOGGLE } from "./constants";
import { Todo } from "./state";

export const toggle = (id: string) => action(TOGGLE, id);
// (id: string) => { type: 'todos/TOGGLE'; payload: string; }

export const add = (title: string) => action(ADD, { title, completed: false } as Todo);
// (title: string) => { type: 'todos/ADD'; payload: Todo; }
