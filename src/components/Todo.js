import React, { Component } from 'react'
import './Style.css'
import Item_handler from './Item_handler'
class todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
             item : [],
             data : []
        }
    }
    addtolistHandler = () =>{
            // let datas = [...this.state.data]

            // datas.push(<Item_handler task={this.state.item}/>)

            // let datas1 = datas.map((data_1,index)=>key={index})

            // this.setState({
            //     data:datas1
            // })
            this.setState({
                data:<Item_handler task={this.state.item}/>
            })
    }
    //to get value from the input field
    itemadderHandler = (event) =>{
        this.setState({
            item : event.target.value
        })
    }
    render() {
        return (
            <div>
                <textarea className="textarea" value={this.state.item} onChange={this.itemadderHandler}></textarea><br />
                <button className="buttons" onClick={this.addtolistHandler}>Add to list</button>

                {/* {console.log(this.state.tasks) } */}
                {/* {this.state.data} */}
                {this.state.data}
            </div>
        )
    }
}

export default todo
