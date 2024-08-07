import { ChangeEvent, useState } from 'react';
import { useGetRepositoriesByValueQuery } from '../api/search';
import {
    DataGrid,
    GridCallbackDetails,
    GridColDef,
    GridRowParams,
    MuiEvent,
} from '@mui/x-data-grid';
import { Header } from '../components/structure';
import styles from './app.module.scss';
import { RepositoryInfo } from '../components/repository-info';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isSearchTriggered, setIsSearchTriggered] = useState(false);
    const { data, error, isLoading, refetch } = useGetRepositoriesByValueQuery(
        isSearchTriggered ? searchValue : '',
    );
    const [selectedRepository, setSelectedRepository] = useState<Repository>({
        id: 1,
        name: '',
        forks_count: 0,
        stargazers_count: 0,
        language: '',
        updated_at: '',
        description: '',
        url: '',
        license: {
            key: '',
            name: '',
            spdx_id: '',
            url: null,
            node_id: '',
        },
    });

    const handleSearch = () => {
        setIsSearchTriggered(true); // Устанавливаем флаг, чтобы запустить поиск
        refetch(); // Вызываем для обновления запроса
    };

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsSearchTriggered(false); // Устанавливаем флаг, чтобы убрать поиск
        setSearchValue(e.target.value); // Изменяем значение поиска
    };

    const handleRowClick = (
        params: GridRowParams,
        event: MuiEvent<React.MouseEvent<HTMLElement>>,
        detailt: GridCallbackDetails,
    ) => {
        setSelectedRepository(params.row);
    };

    const columns: GridColDef<Repository>[] = [
        {
            field: 'name',
            headerName: 'Название',
            width: 150,
            editable: false,
        },
        {
            field: 'language',
            headerName: 'Язык',
            width: 150,
            editable: false,
        },
        {
            field: 'forks_count',
            headerName: 'Число форков',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'stargazers_count',
            headerName: 'Число звёзд',
            sortable: true,
            width: 160,
        },
        {
            field: 'updated_at',
            headerName: 'Дата обновления',
            sortable: true,
            width: 160,
        },
    ];

    return (
        <>
            <Header onChange={handleValueChange} onClick={handleSearch} searchValue={searchValue} />
            <main className={styles.place}>
                {/* <TableContainer component={Paper}>
                    <Table sx={{minWidth: '1200px'}}>
                        <TableRow>

                        </TableRow>
                    </Table>
                </TableContainer> */}
                {data?.items && data.items.length > 1 ? (
                    <>
                        <DataGrid
                            rows={data && data?.items ? data?.items : []}
                            columns={columns}
                            onRowClick={handleRowClick}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                        <section className={`${styles.place__info}`}>
                            <RepositoryInfo
                                id={selectedRepository.id}
                                name={selectedRepository.name}
                                forks_count={selectedRepository.forks_count}
                                stargazers_count={selectedRepository.stargazers_count}
                                language={selectedRepository.language}
                                updated_at={selectedRepository.updated_at}
                                description={selectedRepository.description}
                                url={selectedRepository.url}
                                license={selectedRepository.license}
                            />
                        </section>
                    </>
                ) : (
                    <h1 style={{ display: 'flex', margin: '40vh auto' }}>Добро пожаловать</h1>
                )}
            </main>
        </>
    );
};

export default App;
