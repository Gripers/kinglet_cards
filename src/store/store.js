import { configureStore } from '@reduxjs/toolkit';

import cardsSlice from './reducers/cardsSlice';
import configuratorSlice from './reducers/configuratorSlice';
import variantsSlice from './reducers/variantsSlice';

const store = configureStore({
  reducer: {
    cards: cardsSlice,
    configurator: configuratorSlice,
    variants: variantsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
