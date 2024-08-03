interface Props {
    cartItems: string[],
    onClear: () => void
}

const Cart = ({cartItems, onClear}: Props) => {

    return (
        <>
            <div>
                <h1>Cart</h1>
            </div>
            <ul>
                {cartItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={onClear}>Clear</button>
        </>

    )
}

export default Cart