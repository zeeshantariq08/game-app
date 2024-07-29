let count = 0;
const Message = () => {
    count++;
    console.log('Message called', count);
    return <h1>Message {count} </h1>;

}

export default Message