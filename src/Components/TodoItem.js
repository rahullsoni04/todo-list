import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div className='container my-3 py-3 px-3'>
      <h3>{todo["title"]}</h3>
      <p>{todo["description"]}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}> Delete </button>
    </div>
  )
}

export default TodoItem
