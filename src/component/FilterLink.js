import React , { Component} from 'react'
import { connect} from 'react-redux'
import {setVisibilityFilter} from './../actions'


class FilterLink extends Component {

  onClick(e) {
    e.preventDefault()
    this.props.onClick()
  }

  render () {
    const { children} = this.props
    return(
          <a href="#" onClick = {this.onClick.bind(this)}>
              {children}
          </a>
    )
  }
}

const mapDispatchToProps = (dispatch , ownProps) => {
  return {
        onClick : () => {
          return dispatch(setVisibilityFilter(ownProps.filter))
        }
  }
}

export default connect (null,mapDispatchToProps)(FilterLink)