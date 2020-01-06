import React, { Component } from 'react';
import ChatFeed from './ChatFeed';
import RoomWebSocket from './RoomWebSocket';

class RoomShow extends Component {
    constructor() {
        super()
        this.state = {
            newMessage: ''
        }
    }

    displayUsers = (users) => {
        return users.map( user => {
            return <li key={user.id}><img src={`http://localhost:3000/${user.attributes.avatar_url}`} alt={`avatar for ${user.attributes.username}`}/>{user.attributes.username}</li>
        })
    }

    handleMessageInput = (event) => {
        this.setState({
            newMessage: event.target.value
        })
    }

    submitMessage = (event) => {
        event.preventDefault()

        this.setState({
            newMessage: ''
        })

        const message = {
            content: this.state.newMessage,
            user_id: this.props.currentUser.id,
            room_id: this.props.roomData.room.id
        }

        fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({message: message})
        })
        .then(resp => resp.json())
        .then(result => {
            let messageDiv = document.getElementById('messages')
            messageDiv.scrollTop = messageDiv.scrollHeight
        })
    }

    render() {
        return (
            <div>
                { Object.keys(this.props.roomData.room).length > 0 ? (
                    <div id='room-show'>
                        <h1 id='room-header'>Welcome to the {this.props.roomData.room.attributes.name} Room!</h1>
                        <div id='room-sidebar'>
                            <h3>Fellow {this.props.roomData.room.attributes.name}</h3>
                            <ul id='users-list'>
                                {this.displayUsers(this.props.roomData.room.attributes.users.data)}
                            </ul>
                        </div>
                        <ChatFeed room={this.props.roomData.room} currentUser={this.props.currentUser} />
                        <form id='chat-form' onSubmit={this.submitMessage}>
                            <h3>Post a new message:</h3>
                            <textarea type='text' value={this.state.newMessage} onChange={this.handleMessageInput}></textarea>
                            <br></br>
                            <input type='submit'></input>
                        </form>
                    </div>
                ) : null }
                
                <RoomWebSocket
                    cableApp={this.props.cableApp}
                    updateApp={this.props.updateApp}
                    getRoomData={this.props.getRoomData}
                    roomData={this.props.roomData}
                />
            </div>
        )
    }
}

export default RoomShow