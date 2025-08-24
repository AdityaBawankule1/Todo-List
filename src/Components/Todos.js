import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className='container my-3' style={{minHeight: "70vh"}}>
        <h3 className="my-3"> Todos List</h3>
        {props.todos.length === 0 ? "No Todos to display" : 
        props.todos.map((todo,i) => {
          return <Todo todo={todo} key={i} onDelete={props.onDelete}/>
        }
        )}
    </div>
  )
}

export default Todos
