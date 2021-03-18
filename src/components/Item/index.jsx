import React, { Component } from 'react'

export default class Item extends Component {
    state = { mouse: false }
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    handleCheck = (id) => {
        return ({target}) => {
            this.props.updateTodo(id, target.checked);
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
                    <input type="checkbox" defaultChecked={done}
                        onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? '' : 'none' }}>删除</button>
            </li>
        )
    }
}
