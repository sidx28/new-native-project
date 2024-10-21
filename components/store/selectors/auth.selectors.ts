import { createSelector } from "reselect";
import { authSelector } from "./app.selectors";

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
