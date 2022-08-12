import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/store';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;
