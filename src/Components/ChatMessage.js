import React, { Component } from 'react';

class ChatMessage extends Component {
    
    render() {
        // when rendering the chat message, I need to first check whether the author of that message is my current user or not (by comparing ids)
        // if it is my current user, I will align the chat message div to the right of the page, and use a different color to differentiate their messages from the others
        return (
            <div id="chat-message">
                <h4>{this.props.message.content}</h4>
                <img src={`http://localhost:3000/${this.props.avatar}`} alt="message author's avatar"/>
            </div>     
        )
    }
}

export default ChatMessage

{/* <img src={`http://localhost:3000/${this.props.message.user.avatar_url}`} alt="message author's avatar" /> */}

{/* <div className='other-user-message'>
                        <h4>{console.log('this.props.message...', this.props.message)}{this.props.message.content}</h4>
                        <h4>{console.log('this.props.messages...', this.props.messages)}</h4>
                    </div> */}
