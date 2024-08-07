// Декларируем интерфейс для дальнейшего использования
declare interface Repository {
    id: number;
    name: string;
    forks_count: number;
    stargazers_count: number;
    language: string;
    updated_at: string;
    description: string;
    url: string;
    license: {
        key: string;
        name: string;
        spdx_id: string;
        url: null | string;
        node_id: string;
    };
}

declare interface SearchResponse {
    items: Repository[];
}
