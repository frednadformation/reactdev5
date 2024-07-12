import React, { Component } from 'react'

class AdminTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isAdmin : false
      }
    }

  render() {

    // var rendu;
    // if(this.state.isAdmin){
    //     rendu = <div><button>Edit</button></div>
    // }
    // else{
    //     rendu = <div>Veuillez vous connecter en temps qu'Admin</div>
    // }

    // return (
    //   <div>{rendu}</div>
    // )

    return this.state.isAdmin ? <div><button>Edit</button></div> : <div>Veuillez vous connecter en temps qu'Admin</div>
  }
}

export default AdminTest    