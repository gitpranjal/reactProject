import React from 'react'
import faker from 'faker'











const CommentDetail = function(props){
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">Today</span>
                </div>
                <div className="text">
                    Chikni chameli paoova chadha ke aaai
                </div>
                
            </div>
        </div>
    )
}

export default CommentDetail