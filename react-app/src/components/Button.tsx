interface Props {
    text: string
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
    onClick: () => void
}

const Button = ({text, onClick, color = 'primary'}: Props) => {

    return (
        <button className={'btn btn-' + color} onClick={onClick}>{text}</button>
    )
}

export default Button