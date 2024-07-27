import {useState} from "react";
import styles from "./ListGroup.module.css";


interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    // state hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // handle click event
    return (
        <>
            <h1>{heading}</h1>
            {
                items.length == 0 && <p>No items found</p>
            }
            <ul className={[styles.listGroup, styles.container].join(" ")}>
                {items.map((item, index) => (
                    <li onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item)

                    }}
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;