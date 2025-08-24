const TodoData = (props) => {
    //props là một object {}
    // {
    //     name: "Bin",
    //     age: 19,
    //     data: {}
    // }
    const {name, age, data} = props;
    // const addNewTodo = () => {
    // alert("call me babe");
    // }
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    // console.log(">>> check props: ", props);
    return (
    <div className='todo-data'>
        <div>My name is : {name} </div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
        {/* <button onClick={addNewTodo}>Click me</button> */}
    </div>
    )
}
export default TodoData;