import React, {Component} from "react";

class Message extends Component {

    constructor(){
        super();
        this.state = {
            message : "Welcome Visitor!",
            prenom: "Thomas",
            age: "44"
        };
    }
    changeMessage(){
        this.setState({
            message : "Merci pour l'abonnement !!",
        })
    }


    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;