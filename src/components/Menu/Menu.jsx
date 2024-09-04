
import { Component } from "react";
import './Menu.css'
class Menu extends Component{

    constructor(props){
        super(props);
        this.state = ({
            nav_visible : "hide"
        })
    }

    activate_menu = (e) => {
        console.log(e)
        // if(this.state.nav_visible == "hide"){
        //     this.setState({nav_visible:"show"})
        // }else{
        //     this.setState({nav_visible:"hide"})
        // }

    }
    

    render(){

        const {nav_visible} = this.state

        return(
            <div className="main">
                <div onClick={this.activate_menu} className="menu_button"></div>

                <div className={`right_menu ${nav_visible}`}></div>
            </div>
        )
    }

}

export default Menu;