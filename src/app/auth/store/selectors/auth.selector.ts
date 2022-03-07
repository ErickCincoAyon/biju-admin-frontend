import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureName } from '../auth.state';

export const getAuthFeatureState = createFeatureSelector<AuthState>( authFeatureName );

export const selectMessage = createSelector(
    getAuthFeatureState,
    (state: AuthState) => state.message
);

export const selectAccessToken = createSelector(
    getAuthFeatureState,
    (state: AuthState) => state.access_token
);

export const selectAdmin = createSelector(
    getAuthFeatureState,
    (state: AuthState) => state.admin
);

export const selectError = createSelector(
    getAuthFeatureState,
    (state: AuthState) => state.error
);