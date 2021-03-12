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
        var array = [...this.state.data]
        var filterObj = array.filter(function(e) {
            return e.key == item;
          });

          console.log(filterObj)
          console.log(array)

          //console.log(array.includes(filterObj)) 
        var index = array.indexOf(filterObj)
        //console.log(index)
         if (index !== -1) {
             array.splice(index, 1);
             this.setState({data: array});
        //     console.log("got deleted" + item)
           }
          //console.log(array)
    }
    render() {
        return (
            <div className="main">
                <textarea className="textarea" value={this.state.item} onChange={this.itemadderHandler}></textarea><br />
                <button type="submit" className="buttons" onClick={this.addtolistHandler}>Add to list</button>

                {this.state.data}
        {/* {console.log(this.state.item)} */}
            </div>
        )
    }
}

export default todo
