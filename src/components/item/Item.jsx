import './Item.css'

import { Component } from 'react'

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            device: "PC",
            age: "29",
            name: "38",
        }
    }
   
    chAge = () => {
        this.setState({age:"31"})
    }


    render(){
        return(
            <div className="card">
                <p>Device: {this.state.device} {this.state.age}</p>
                <button onClick={() => this.setState({device:"Mobile"})}>Activate</button>
                <button onClick={this.chAge}>CH Age</button>
            </div>
        )
    }


    


}

export default Item;