import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from '../api/search';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
    }, // Указываем редьюсер
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware), // Указываем мидлвейр
});

setupListeners(store.dispatch); // Устанавливаем слушатель на стор
