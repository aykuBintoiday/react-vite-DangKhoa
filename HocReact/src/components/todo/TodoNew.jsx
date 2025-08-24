const TodoNew = (props) => {
    console.log(">>> check point: ", props);
    const {addNewTodo} = props;

    // addNewTodo("Bin");
    return (
    <div>
        <input type="text" placeholder="hãy nhập điều mà bạn muốn"/>
        <button>Add</button>
    </div>
    )
}

export default TodoNew;