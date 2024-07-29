import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";
import {BsCircleFill} from "react-icons/bs";
import Like from "./components/Like";


function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    // @ts-ignore
    const [alertVisible, setAlertVisibility] = useState(false);
    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    // state updating exercise

    const [cart, setCart] = useState({
        items: [
            {
                id: 1,
                title: 'Product 1',
                quantity: 1
            },
            {
                id: 2,
                title: 'Product 2',
                quantity: 1
            }
        ],
        discount: 1
    })

    const handleClick = () => {
        console.log("clicked");

        setCart({
            ...cart,
            items: cart.items.map(item => item.id == 1 ? {...item, quantity: item.quantity + 1} : item)
        })
    }

    return <div>
        <div>
            <BsCircleFill color="red" size="50px"/>
        </div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
        {
            alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
            <h1>Hello</h1>
        </Alert>
        }
        <Button text="Click me" color="primary" onClick={() => setAlertVisibility(true)}/>

        <Like onClick={handleClick}/>

    </div>
}

export default App;
