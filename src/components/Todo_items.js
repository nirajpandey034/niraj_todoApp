import React, { Component } from 'react'
import './Style.css'

class todo_items extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isChecked : false,
             textLine : '',
             isvisible: ''
        }
    }

    checkboxTickHandler = () =>{
        if(this.state.isChecked === false){
            this.setState({
                isChecked : true,
                textLine : 'line-through',
                isvisible : 'hidden'
            })

            this.props.deleteItem(this.props.task)
        }
        else{
            this.setState({
                isChecked : false,
                textLine : 'none',
            })
        }
    }
    render() {
        return (
            <div className="item">
                      <label style={{textDecoration : this.state.textLine},{visibility : this.state.isvisible}}>
                          {this.props.task} 
                      </label>   
                      {/* <button>Completed</button>*/}
                      <input style={{visibility : this.state.isvisible}} type="checkbox" defaultChecked={this.state.isChecked} 
                      onChange={this.checkboxTickHandler}>

                      </input>
            </div>
        )
    }
}

export default todo_items
