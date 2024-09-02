import { Component } from "react";
import './Logo.css'

class Logo extends Component {

    render(){

        const {status} = this.props
        console.log(this.props)
        return(
            <div>
                {status}
            </div>
        )
    }


}

export default Logo;