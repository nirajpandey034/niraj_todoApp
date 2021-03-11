import React, { Component } from 'react'
import Todo_items from './Todo_items'
import './Style.css'
class todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             item : ''
        }
    }

    addtolistHandler = () =>{
            this.setState({
                item : document.getElementById("todo_item").value
            })
    }
    render() {
        return (
            <div>
                <textarea id="todo_item" className="textarea"></textarea><br />
                <button className="buttons" onClick={this.addtolistHandler}>Add to list</button>
            </div>
        )
    }
}

export default todo
