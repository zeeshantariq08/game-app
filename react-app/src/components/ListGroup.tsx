import {MouseEvent} from "react";
function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    // handle click event
    const HandleClicked = (event: MouseEvent) => console.log(event)
    return (
        <>
            <h1>List</h1>
            {
                items.length == 0 && <p>No items found</p>
            }
            <ul className="list-group">
                {items.map((item, index) => (
                    <li onClick={HandleClicked} className="list-group-item" key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;