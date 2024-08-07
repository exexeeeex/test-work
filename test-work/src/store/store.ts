import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from '../api/search';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware),
});

setupListeners(store.dispatch);
