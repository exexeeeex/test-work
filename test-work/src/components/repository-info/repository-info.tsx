import { FC } from 'react';
import styles from './repository-info.module.scss';
import star from '../../assets/star.svg';

const RepositoryInfo: FC<Repository> = (repository: {
    id: number;
    name: string;
    language: string;
    stargazers_count: number;
    license: {
        name: string;
    };
}) =>
    repository.id > 0 ? (
        <div className={`${styles.block}`}>
            <h1 className={`${styles.block__title}`}>{repository.name}</h1>
            <div className={`${styles.block__header}`}>
                <h1 className={`${styles.block__header__language}`}>{repository.language}</h1>
                <div className={`${styles.block__header__stars}`}>
                    <img className={`${styles.block__header__stars__img}`} src={star} alt='star' />
                    <p className={`${styles.block__header__stars__count}`}>
                        {repository.stargazers_count}
                    </p>
                </div>
            </div>
            <p>{repository.license ? repository.license.name : 'Нет лицензии'}</p>
        </div>
    ) : (
        <div>
            <h1>Выберите репозиторий</h1>
        </div>
    );
export default RepositoryInfo;
