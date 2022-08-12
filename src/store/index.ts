import store, { AppDispatch, AppThunk, RootState } from './store';
import { useAppDispatch, useAppSelector } from './hooks';

export default store;
export { useAppDispatch, useAppSelector };
export type { AppDispatch, AppThunk, RootState };
