import {useState} from "react";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
    cursor: pointer;

    &:hover {
        color: #007bff;
    }

    padding: 5px 10px;
    background: ${props => props.active ? 'blue' : 'none'}
`;


interface ListItemProps {
    active: boolean;
}

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    // state hook
    const [selectedIndex, setSelectedIndex] = useState(0);

    // handle click event
    return (
        <>
            <h1>{heading}</h1>
            {
                items.length == 0 && <p>No items found</p>
            }
            <List>
                {items.map((item, index) => (
                    <ListItem
                        active={index === selectedIndex}
                        onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item)

                    }}
                        key={item}>{item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default ListGroup;