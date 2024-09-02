import { Component } from "react";
import './Header.css'
import Logo from "./logo/Logo";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            text: "Submit",
            background_color_style: "colorB",
            Status:"pending"
        }
    }





    
    add_plus = () => {
        this.setState(
            (prev) => (
                {
                    number: prev.number + 1,
                    text: "Plus",
                    background_color_style: "colorG",
                    Status: "on"
                }
            )
        )
    }


    remove_minus = () => {
        this.setState(
            (prev) => (
                {
                    number: prev.number - 1,
                    text: "Minus",
                    background_color_style: "color",
                    Status: "off"
                }
            )
        )
    }

    chBg = () => {
        this.setState(
            (prev) => (
                {
                    background_color_style: "colorB",
                    Status: "pending"
                }
            )
        )
    }

   

    render() {

        const { number, text , Status} = this.state

        return (
            <div className={`header ${this.state.background_color_style}`}>
                <h1>{number}</h1>
                <h1>{text}</h1>

                <button onClick={this.add_plus}>Plus </button>
                <button onClick={this.remove_minus}>Minus</button>
                <button onClick={this.chBg}>Blue</button>
                <Logo status={Status} />
            </div>
        )
    }






}

export default Header;