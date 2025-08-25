const TodoData = (props) => {

    const {todoList} = props;

    console.log(">>> check todoList: ", todoList);
    return (
    <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("Check map: ", item, index )
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
        
        {/* <button onClick={addNewTodo}>Click me</button> */}
        <div>
            {JSON.stringify(props.todoList)}
        </div>
    </div>
    )
}
export default TodoData;