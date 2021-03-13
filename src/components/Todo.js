import React, { Component } from 'react'
import './Style.css'
import Todo_items from './Todo_items'
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
                data: [...this.state.data,
                <Todo_items 
                    key={this.state.item} 
                    task={this.state.item} 
                    deleteItem={this.deleteItem.bind(this)}/>],
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

    //work on this section 
    deleteItem = (item) =>{
        let array = [...this.state.data]
        let filterObj = array.filter(function(e) {
            return e.props.task === item;
          });

          //filter method returns a new array, not the object that we were looking for
        let index = array.indexOf(filterObj[0])
         if (index !== -1) {
             array.splice(index, 1);
             this.setState({data: array});
           }
    }
    render() {
        return (
            <div className="main">
                <textarea placeholder="Write down your task here" className="textarea" value={this.state.item} onChange={this.itemadderHandler}></textarea><br />
                <button type="submit" className="buttons" onClick={this.addtolistHandler}>Add to list</button>
                <div className="TaskList">

                <h2>List Down the tasks that you planned to do today SIR!!</h2>
                {/* {this.state.data} */}
                {
                    (this.state.data == '') ?
                    <p style={{color:'red'}}>Nothing in here SIR</p> : this.state.data
                }

                </div>
        {/* {console.log(this.state.item)} */}
            </div>
        )
    }
}

export default todo
