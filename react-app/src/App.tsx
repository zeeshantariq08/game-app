import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";
import {BsCircleFill} from "react-icons/bs";

function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    // @ts-ignore
    const [alertVisible, setAlertVisibility] = useState(false);
    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    const handleClick = () => {
        console.log("clicked");
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

    </div>
}

export default App;
