import { Component } from "react";

class Address extends Component {
    constructor(props){
        super(props)

}

    render(){

        const {rue, ville, cp} = this.props.addresse;
        
        return (
            
            <div>
             rue: {rue},
             ville: {ville},
             code postal: {cp}
            </div>

        //     <div>
        //     rue: {this.props.addresse.rue},
        //     ville: {this.props.addresse.ville},
        //     code postal: {this.props.addresse.cp}
        //    </div>
       )

    }
}

export default Address