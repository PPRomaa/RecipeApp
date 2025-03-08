import {combineReducers} from 'redux';

import {recipeReducer} from './slices/recipeSlice.ts';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
