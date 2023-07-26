import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let todoStyle = {
    minHeight:"37.1vh"
  }
  return (
    <div className='container' style={todoStyle}>
      <h2>Todo List</h2>
     { props.todo.length !==0 ? (props.todo.map((element) =>{
        return <TodoItem key={element.job} todo = {element} onDelete = {props.onDelete}/> 
      })): <h4> No Items to display</h4>}
    </div>
  )
}

export default Todos
