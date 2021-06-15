import React, { useState } from 'react'
import './Todo.css'
import List from './List.js'
import Item from './Item'

function Todo(){

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event){
        let t = event.target.value;
        setText(t)
    }
    
    function addItem(event){
        event.preventDefault();
        if(text){
            let item = new Item(text);
            setItems([...items, item])
            setText("")
        }

    }
    
    
    return (<div className="container"><h1>Lista</h1><form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button onClick={addItem}>Add</button>
    </form>
    
    <List items={items}></List>
    </div>
    )
}



export default Todo