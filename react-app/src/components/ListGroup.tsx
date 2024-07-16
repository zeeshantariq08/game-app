import {useState} from "react";

function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    // state hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // handle click event
    return (
        <>
            <h1>List</h1>
            {
                items.length == 0 && <p>No items found</p>
            }
            <ul className="list-group">
                {items.map((item, index) => (
                    <li onClick={() => setSelectedIndex(index)}
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;