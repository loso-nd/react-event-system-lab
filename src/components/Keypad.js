// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

    handleKey = (e) => {
        console.log("Entering password...")
    }

    render(){
        return (
            <div>
                <input onKeyUp={this.handleKey}
                type="password" name="password" placeholder="Password"></input>
            </div>
        )
    }
}
export default Keypad;