import { createAsyncAction } from "typesafe-actions";

import { Job, User } from "./state";

export const fetchUsers = createAsyncAction(
  "FETCH_USERS_PENDING",
  "FETCH_USERS_FULFILLED",
  "FETCH_USERS_REJECTED",
)<void, ReadonlyArray<User>, Error>();

export const fetchJobs = createAsyncAction(
  "FETCH_JOBS_PENDING",
  "FETCH_JOBS_FULFILLED",
  "FETCH_JOBS_REJECTED",
)<void, ReadonlyArray<Job>, Error>();
