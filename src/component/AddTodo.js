import React , { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions';

class AddTodo extends Component {
    onSubmit(e) {
        e.preventDefault();
        if( ! this.input.value.trim() ) {
            return;
        }

        this.props.dispatch(addTodo(this.input.value));
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input ref={ (input) => this.input = input }/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }

}

export default connect()(AddTodo);