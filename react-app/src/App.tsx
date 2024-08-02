import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";
import {BsCircleFill} from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/Message";

import produce from "immer";


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

    const [tags, setTags] = useState(['cheering', 'excited']);

    const handleTagClicked = () => {

        // add
        setTags([...tags, 'happy']);

        // remove
        setTags(tags.filter(tag => tag !== 'excited'));

        // update

        setTags(tags.map(tag => tag === 'excited' ? 'happy' : tag));
    }


    const [bugs, setBugs] = useState([
        {
            id: 1,
            title: 'Bug 1',
            fixed: false
        },
        {
            id: 2,
            title: 'Bug 2',
            fixed: false
        },
    ])

    const handleBugFixed = () => {
        // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));

        setBugs(produce(bugs, draft => {
            const bug = draft.find(bug => bug.id === 1);
            if (bug) {
                bug.fixed = true;
            }
        }))
    }


    const [customer, setCustomer] = useState({
        id: 1,
        name: 'John',
        address: {
            city: 'New York',
            country: 'USA',
            zipCode: 75485,

        }
    })

    const handleCustomerClick = () => {

        setCustomer({
            ...customer,
            address: {
                ...customer.address, zipCode: 12345
            }
        })
    }




    return <div>
        {bugs.map(bug => {
            return <div key={bug.id}>
                <h1>{bug.title}</h1>
                <h2>{bug.fixed ? 'fixed' : 'not fixed'}</h2>
            </div>
        })}

        <Button text='hello' onClick={handleBugFixed} color="danger"/>

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

        <Message/>


    </div>
}

export default App;
