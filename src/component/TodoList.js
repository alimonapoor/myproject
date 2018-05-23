import React , { Component} from 'react'
import {connect } from 'react-redux'
import { toggleTodo } from './../actions'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const { todos , onTodoClick} = this.props
    return(
          <ul>
              {
                todos.map(todo => <Todo key={todo.id} {...todo} onClick ={() => onTodoClick(todo.id)} />)
              }
          </ul>
    )
  }
} 

const getVisibleTodos = (todos , filter) => {
  switch (filter) {
    case 'SHOW_ALL' :
        return todos
    case 'SHOW_COMPLETE' :
        return todos.filter ( t => t.complete) 
        
    case 'SHOW_ACTIVE' :
        return todos.filter ( t => !t.complete) 
        default :
        throw new Error('unknown filter :' + filter) 
  }
}

const mapStateToProps = (state) => ({
  todos : getVisibleTodos(state.todos , state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : (id) => {
        dispatch(toggleTodo(id))
    }
  }
}

export default connect (mapStateToProps , mapDispatchToProps )(TodoList)