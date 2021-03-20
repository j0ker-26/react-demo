import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTyeps = {
        addTodo: PropTypes.func.isRequired
    };

    handleKeyUp = ({ key, target }) => {
        if (key !== 'Enter') return;
        if (target.value.trim() === '') return void alert('Please type in.');
            const todoObj = {
                id: nanoid(),
                name: target.value,
                done: false
            };
            this.props.addTodo(todoObj);
            target.value = '';
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text"
                    onKeyUp={this.handleKeyUp}
                    placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
