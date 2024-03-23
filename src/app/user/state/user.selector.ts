import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskValue = createSelector(
    getUserFeatureState,
    (state) => state.mask
)