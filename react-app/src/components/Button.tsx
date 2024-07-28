import styles from './Button.module.css';

interface Props {
    text: string
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
    onClick: () => void
}

const Button = ({text, onClick, color = 'primary'}: Props) => {

    return (
        // <button className={'btn btn-' + color} onClick={onClick}>{text}</button>
        <button className={[styles.btn, styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{text}</button>
    )
}

export default Button