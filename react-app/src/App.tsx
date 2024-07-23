import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    const handleClick = () => {
        console.log("clicked");
    }
    return <div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
        <Alert>
            <h1>Hello</h1>
        </Alert>
        <Button text="Click me" color="primary" onClick={handleClick}/>

    </div>
}

export default App;
