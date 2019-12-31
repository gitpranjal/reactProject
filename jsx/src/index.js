//imort React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'









//Create react component
function getButtonName(){
    return "Oooh yeah aah!!  hit me"
}
const App = function(){
    return (
        <div>
            <label class="label" for="name">
            Enter Name:
            </label>
            <input id="name" />
            <button style={{backgroundColor:"red", color:"yellow"}} >{getButtonName()}</button>
        </div>
    )
}








//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"))