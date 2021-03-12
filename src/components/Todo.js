import React, { Component } from 'react'
import './Style.css'
import Item_handler from './Item_handler'
class todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
             item : '',
             data : []
        }
    }
    addtolistHandler = () =>{
        if(this.state.item !== ''){
            this.setState({
                data: [...this.state.data,<Item_handler key={this.state.item} task={this.state.item}/>],
                item :''
            })
        }
    }
    //to get value from the input field
    itemadderHandler = (event) =>{
        this.setState({
            item : event.target.value
        })
    }
    render() {
        return (
            <div className="main">
                <textarea className="textarea" value={this.state.item} onChange={this.itemadderHandler}></textarea><br />
                <button type="submit" className="buttons" onClick={this.addtolistHandler}>Add to list</button>

                {this.state.data}
            </div>
        )
    }
}

export default todo
