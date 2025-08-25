const TodoData = (props) => {

    const {todoList, deleteTodo} = props;

    const handleDelete = (id) => {
        deleteTodo(id);
    }

    return (
    <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("Check map: ", item, index )
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                )
            })}
        
        {/* <button onClick={addNewTodo}>Click me</button> */}
    </div>
    )
}
export default TodoData;