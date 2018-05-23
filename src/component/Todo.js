import React , { Component} from 'react'

class Todo extends Component {
  
  render() {
    const { onClick , text , complete} = this.props
    return(
      <li onClick={onClick} style ={{ textDecoration:complete ? 'line-through' : 'none'}}>
        {text}
      </li>
    )
  }
}

export default Todo