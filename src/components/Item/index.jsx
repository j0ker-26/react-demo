import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
    state = { mouse: false }

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    // check todo
    handleCheck = (id) => {
        return ({ target }) => {
            this.props.updateTodo(id, target.checked);
        }
    }
    // delete todo
    handleClick = (id) => {
        if (window.confirm('Are you sure to delete this item?')) {
            this.props.deleteTodo(id);
        }
    }
    render() {
        const { id, name, done } = this.props,
            { mouse } = this.state;
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done}
                        onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger"
                    style={{ display: mouse ? '' : 'none' }}
                    onClick={() => this.handleClick(id)}
                >删除</button>
            </li>
        )
    }
}
