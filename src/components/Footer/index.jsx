import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAll: PropTypes.func.isRequired,
        deletDone: PropTypes.func.isRequired
    }
    handleChange = ({ target }) => {
        this.props.checkAll(target.checked);
    }
    handleClick = () => {
        this.props.deletDone();
    }
    render() {
        const { todos } = this.props,
            doneCount = todos.reduce((pre, todo) =>
                todo.done ? ++pre : pre, 0),
            total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                        checked={doneCount === total && total !== 0}
                        onChange={this.handleChange} />
                </label>
                <span>
                    <span>已完成 {doneCount}</span> / 全部 {total}
                </span>
                <button className="btn btn-danger"
                onClick={this.handleClick}>清除已完成任务</button>
            </div>
        )
    }
}
