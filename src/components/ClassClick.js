import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Bouton Clicked");
    }
  render() {
    return (
      <div><button onClick={this.clickHandler}>Click me class !</button></div>
    )
  }
}

export default ClassClick