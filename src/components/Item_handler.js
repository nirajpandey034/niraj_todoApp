import React, { Component } from 'react'
import Todo_items from './Todo_items'

class Item_handler extends Component {
    render() {
        return (
            <div>
                <Todo_items task={this.props.task}/>
                {/* {console.log(this.props.task)} */}
            </div>
        )
    }
}

export default Item_handler
