import React , {Component } from 'react';
import FilterLink from './FilterLink';

export default class Footer extends Component {

    render() {
        return (
            <p>
                show :
                {" "}
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
                {" "}
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {" "}
                <FilterLink filter="SHOW_COMPLETE">
                    Complete
                </FilterLink>
                {" "}
            </p>
        )
    }
}