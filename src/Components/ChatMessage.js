import React, { Component } from 'react';

class ChatMessage extends Component {
    whichUser = () => {
        if (this.props.message.user_id == this.props.currentUser.id) {
            return 'current-user-message'
        } else {
            return 'other-user-message'
        }
    }
    
    render() {
        // when rendering the chat message, I need to first check whether the author of that message is my current user or not (by comparing ids)
        // if it is my current user, I will align the chat message div to the right of the page, and use a different color to differentiate their messages from the others' messages
        return (
            <div id="chat-message" className={this.whichUser()}>
                <h4>{this.props.message.content}</h4>
                <img src={`http://localhost:3000/${this.props.avatar}`} alt="message author's avatar"/>
            </div>     
        )
    }
}

export default ChatMessage
