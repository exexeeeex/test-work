import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Constants } from '../constants/constants';

export const searchApi = createApi({
    reducerPath: 'searchApi', // Указываем путь до редьюсера
    baseQuery: fetchBaseQuery({ baseUrl: Constants.GitHubApiUrl }), // Указываем константу базового пути Api
    endpoints: (builder) => ({
        getRepositoriesByValue: builder.query<SearchResponse, string>({
            query: (value: string) => value && `search/repositories?q=${value}`,
        }),
    }),
    // Выполняем запрос
});

export const { useGetRepositoriesByValueQuery } = searchApi; // Экспортируем
