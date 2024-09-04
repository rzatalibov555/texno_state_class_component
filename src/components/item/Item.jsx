import './Item.css'

import { Component } from 'react'

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bg: "grey",
            margin:"",
            eshban:"black"
        }
    }

    ChBgColor(e){
        // console.log(e.target.value)
        this.setState({
            bg : e.target.value
        })
    }


    chMargin(e){
        this.setState({
            margin : e.target.value
        })
    }

    chColor(e){
        this.setState({
            eshban : e.target.value
        })
    }
    
    render(){

        const {name, surname, ...all} = this.props
        const {bg, margin, eshban} = this.state

        return(
            <div className="card" style={{background:bg, margin:margin, color:eshban}}>
                <p>Name: {name}</p>
                <p>Surname: {surname} </p>
                <p>Age: {all.age} </p>
                <p>Email: {this.props.email} </p>

                <input type="text" onChange={(e) => this.ChBgColor(e)} />
                <input type="text" onChange={(e) => this.chMargin(e)} />
                <input type="text" onChange={(e) => this.chColor(e)} />
            </div>
        )
    }


    


}

export default Item;