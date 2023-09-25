import { configureStore } from '@reduxjs/toolkit'
import storiesSlice from './reducers/stories.reduces';

export const makeStore = () => configureStore({
  reducer: {
    [storiesSlice.name]: storiesSlice.reducer,
  },
  devTools: true
});