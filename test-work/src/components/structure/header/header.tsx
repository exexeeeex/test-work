import Button from '@mui/material/Button';
import styles from './header.module.scss';

const Header = (props: { onChange: any; onClick: any; searchValue: string }) => {
    return (
        <header className={`${styles.header}`}>
            <input
                onChange={props.onChange}
                value={props.searchValue}
                className={styles.header__input}
            />
            <Button
                onClick={props.onClick}
                style={{ height: '42px', width: '105px' }}
                variant='contained'
            >
                Искать
            </Button>
        </header>
    );
};

export default Header;
