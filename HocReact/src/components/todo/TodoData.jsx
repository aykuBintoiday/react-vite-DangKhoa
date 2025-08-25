const TodoData = (props) => {

    const {todoList} = props;

    return (
    <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("Check map: ", item, index )
                return (
                    <div className="todo-item" key={index}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
        
        {/* <button onClick={addNewTodo}>Click me</button> */}
    </div>
    )
}
export default TodoData;