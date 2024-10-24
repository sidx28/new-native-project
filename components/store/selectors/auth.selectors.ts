import { createSelector } from "reselect";
import { authSelector } from "./app.selectors";
import { User } from "@/components/models/entities/User";

export const meError = createSelector(
  [authSelector],
  (authState) => authState.error
);

export const meLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.loading
);

export const meIdSelector = createSelector(
  [authSelector],
  (authState) => authState.userId
);

export const meLoaded = createSelector(
  [authSelector],
  (authState) => authState.loaded
);

export const meSelector = createSelector(
  [authSelector],
  (authState) => authState.loggedInUser
);

export const usersSelector = createSelector([authSelector], (authState) => {
  const loggedInUser = authState?.loggedInUser;

  const usersData = Object.keys(authState.entities)
    ?.map((i) => authState.entities[+i])
    ?.filter((i) => i.id !== loggedInUser?.id);
  return usersData ?? [];
});

export const usersLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.loadingList
);
