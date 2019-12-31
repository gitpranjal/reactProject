//importing React and ReactDOM 
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'









//creating the react component
const App = function(){
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
        </div>
    
    )
}







//showing the react component on the screen 
ReactDOM.render(<App />, document.querySelector("#root"))