import { Component } from "react";
import Address from "./Address";

class Contact extends Component {

    constructor(props){

        super(props)

        this.state = {
            contact: { 
                nom: "Michel",
                prenom: "Louise",
                tel: "inconnu",

             addresse: { 
                rue: "rue",
                ville: " Vroncourt-la-Côte",
                cp: "52000"
            }
        }
    }
}

    render(){
        const {nom, prenom, tel} = this.state.contact
        return (
            <div>
                nom: {nom}, prenom: {prenom}, tel: {tel}
                <Address addresse = {this.state.contact.addresse}></Address>
             {/* name: {this.state.contact.nom},firstname: {this.state.contact.prenom},tel: {this.state.contact.tel}
             <Address addresse = {this.state.contact.addresse}></Address> */}
            </div>
        )
    }
}

export default Contact