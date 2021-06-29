import React from 'react'
import Card from './card'


function List(props){
    
function DoneImg(props){
    if(props.done){
        return(<img src="./assets/on.png" alt="done"></img>)
    }else{
        return(<img src="./assets/off.png" alt="undone"></img>)
    }
}
    
    return (<ul>
    
        {props.items.map(item=><li  key={item.id}>
           <Card className={item.done?"item done" : "item" }> {item.text}
            <div>
            <button className="checkedimg" onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
            <button onClick={() => {props.onItemDeleted(item)}}><img src="./assets/bin.png" alt="delete"></img></button></div>
            </Card>
            </li> )}
     
 </ul>)
}

export default List