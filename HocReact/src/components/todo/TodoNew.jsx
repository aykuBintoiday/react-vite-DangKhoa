import { useState } from "react";

const TodoNew = (props) => {
    // useState Hook (getter/setter)
    // const valueInput = "";
    const [valueInput, setValueInput] = useState("Bin");

    const {addNewTodo} = props;

    // addNewTodo("Bin");
    const handleClick = () => {

        { valueInput.trim() === "" ? alert("Bạn hãy nhập dữ liệu!") :
            addNewTodo(valueInput);
            setValueInput("");
        }
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
    <div>
        <input 
        type="text" 
        placeholder="hãy nhập điều mà bạn muốn" 
        onChange={(event) => {handleOnChange(event.target.value)}}
        value={valueInput}
        />
        <button onClick={handleClick}>Add</button>
        <div>
            My text input is : {valueInput}
        </div>
    </div>
    )
}

export default TodoNew;