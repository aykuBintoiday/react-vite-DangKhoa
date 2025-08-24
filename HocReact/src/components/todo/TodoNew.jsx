const TodoNew = (props) => {
    console.log(">>> check point: ", props);
    const {addNewTodo} = props;

    // addNewTodo("Bin");
    const handleClick = () => {
        alert("Click me");
    }

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
    }
    return (
    <div>
        <input type="text" placeholder="hãy nhập điều mà bạn muốn" onChange={(event) => {handleOnChange(event.target.value)}}/>
        <button onClick={handleClick}>Add</button>
    </div>
    )
}

export default TodoNew;