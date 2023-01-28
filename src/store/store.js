import { configureStore } from '@reduxjs/toolkit';

import globalSlice from './reducers/globalSlice';
import cardsSlice from './reducers/cardsSlice';
import configuratorSlice from './reducers/configuratorSlice';
import variantsSlice from './reducers/variantsSlice';

const store = configureStore({
  reducer: {
    global: globalSlice,
    cards: cardsSlice,
    configurator: configuratorSlice,
    variants: variantsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
