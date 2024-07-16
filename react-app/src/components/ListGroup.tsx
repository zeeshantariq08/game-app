function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    return (
        <>
            <h1>List</h1>
            {
                items.length == 0 && <p>No items found</p>
            }
            <ul className="list-group">
                {items.map((item, index) => (
                    <li onClick={(event) => console.log(event)} className="list-group-item" key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;