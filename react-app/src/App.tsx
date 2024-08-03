import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";
import {BsCircleFill} from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/Message";

import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";


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

    // sharing state concept between components

    const [cartItems, setCartItems] = useState([
        'Product1',
        'Product2',
        'Product3'
    ])





    return <div>
        {/*{bugs.map(bug => {*/}
        {/*    return <div key={bug.id}>*/}
        {/*        <h1>{bug.title}</h1>*/}
        {/*        <h2>{bug.fixed ? 'fixed' : 'not fixed'}</h2>*/}
        {/*    </div>*/}
        {/*})}*/}

        {/*<Button text='hello' onClick={handleBugFixed} color="danger"/>*/}

        {/*<div>*/}
        {/*    <BsCircleFill color="red" size="50px"/>*/}
        {/*</div>*/}
        {/*<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>*/}
        {/*{*/}
        {/*    alertVisible && <Alert onClose={() => setAlertVisibility(false)}>*/}
        {/*    <h1>Hello</h1>*/}
        {/*</Alert>*/}
        {/*}*/}
        {/*<Button text="Click me" color="primary" onClick={() => setAlertVisibility(true)}/>*/}

        {/*<Like onClick={handleClick}/>*/}

        {/*<Message/>*/}

        {/*<NavBar cartItemsCount={cartItems.length}/>*/}
        {/*<Cart cartItems={cartItems} onClear={() => setCartItems([])}/>*/}

        <ExpandableText maxChars={50}>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem cumque distinctio dolorum eum ipsa
            labore, laudantium modi molestias mollitia nisi quae quia quisquam suscipit totam ullam vitae, voluptatibus.
            Aliquam assumenda nemo odio repellendus voluptas? Adipisci alias architecto asperiores aspernatur beatae
            dolor eius ex, ipsum obcaecati, odio praesentium quisquam soluta, voluptatem voluptates voluptatum. Ducimus
            fugiat laudantium nemo quas, quasi ratione sint vel vitae voluptatem? Aperiam asperiores, atque, autem
            consequuntur dolore eius eos explicabo fugiat fugit ipsa nisi nostrum obcaecati rem sunt voluptatem.
            Adipisci dicta facilis iusto maxime nisi odit quaerat qui quia quo voluptatem. Adipisci aliquid aperiam at
            aut blanditiis cum cumque delectus, distinctio dolores in laborum maxime necessitatibus odit omnis placeat
            provident quaerat quia rem repellendus rerum sapiente vel voluptatibus. Ab accusantium alias consequatur
            consequuntur cumque dolorem doloribus earum eligendi esse ex exercitationem facere facilis incidunt itaque
            laudantium natus, nihil nobis odit officia qui quisquam ratione recusandae rem rerum saepe temporibus ullam
            unde ut, velit vero voluptate voluptatem, voluptates voluptatum. Asperiores dolor dolorem eveniet illo
            inventore, ipsa iure minima odio ratione ullam, veniam vitae! Accusantium dignissimos, distinctio doloribus
            eligendi error esse est et fuga in ipsam labore maiores nostrum odio officia omnis quibusdam ratione
            repudiandae tempora tenetur vitae. Itaque.
        </ExpandableText>


    </div>
}

export default App;
