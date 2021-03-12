import React, { Component } from 'react'

class todo_items extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isChecked : false,
             textLine : ''
        }
    }

    checkboxTickHandler = () =>{
        if(this.state.isChecked === false){
            this.setState({
                isChecked : true,
                textLine : 'line-through'
            })

            //console.log("checked")
        }
        else{
            this.setState({
                isChecked : false,
                textLine : 'none'
            })
            //console.log("un-checked")
        }
    }

    // componentDidMount(){

    // }
    render() {
        return (
            <div>
                      <label style={{textDecoration : this.state.textLine}}>{this.props.task} </label>   
                      {/* <button>Completed</button>*/}
                      <input type="checkbox" defaultChecked={this.state.isChecked} onChange={this.checkboxTickHandler}></input>
            </div>
        )
    }
}

export default todo_items
