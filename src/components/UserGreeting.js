import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
         message: 'Welcome Guest'
      }
    }

    updateNom(){
        this.setState({
            // message : "Welcom User"
            isLoggedIn: true
        })
    }
  render() {
        // if(this.state.isLoggedIn)
        //     return <div>Welcome Fréd
        //     <br/>
        //     <button onClick={()=>this.updateNom()}>Se connecter</button>
        //     </div>
        // else
        //     return <div>Welcome Guest
        //     <br/>
        //     <button onClick={()=>this.updateNom()}>Se connecter</button>
        //     </div>

        // return this.state.isLoggedIn ? <div>Welcome Fréd </div> : (<div>Welcome Guest 
        //                                                                 <button onClick={()=>this.updateNom()}>Se connecter</button>
        //                                                             </div>)
        // return this.state.isLoggedIn && <div>Welcome Fréd </div>


            // return <div>
            //     {this.state.message}
                // <button onClick={()=>this.updateNom()}>Se connecter</button>
            // </div>

            let result;
            if(this.state.isLoggedIn){
                result = <div>Welcome Fréd </div>
            }
            else{
                result = <div>Welcome Guest <button onClick={()=>this.updateNom()}>Se connecter</button></div>
            }
            
            return <div>{result}</div>
  }
}

export default UserGreeting