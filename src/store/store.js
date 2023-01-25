import { configureStore } from '@reduxjs/toolkit';

import cardsSlice from './reducers/cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
