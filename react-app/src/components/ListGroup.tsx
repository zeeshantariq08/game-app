import {useState} from "react";


interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {
    // state hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // handle click event
    return (
        <>
            <h1>{heading}</h1>
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