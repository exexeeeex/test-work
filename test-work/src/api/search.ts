import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Constants } from '../constants/constants';

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: Constants.GitHubApiUrl }),
    endpoints: (builder) => ({
        getRepositoriesByValue: builder.query<SearchResponse, string>({
            query: (value: string) => value && `search/repositories?q=${value}`,
        }),
    }),
});

export const { useGetRepositoriesByValueQuery } = searchApi;
