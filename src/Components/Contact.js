import { Component } from "react";
import Address from "./Address";

class Contact extends Component {

    constructor(props){

        super(props)

        this.state = {
            contact: { 
                nom: "hghgjk",
                prenom: "sdggdgs",
                tel: "4534545347",

             addresse: { 
                rue: "sgsg",
                ville: "fgdhhd",
                cp: "15645"
            }
        }
    }
}

    render(){
        return (
            <>
             name: {this.state.contact.nom},
             firstname: {this.state.contact.prenom},
             tel: {this.state.contact.tel}
             <Address addresse = {this.state.contact.addresse}></Address>
            </>
        )
    }
}

export default Contact