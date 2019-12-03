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
            return <li key={user.id}>{user.attributes.username}<img href={`http://localhost:3000/${user.attributes.avatar_url}`}/></li>
        })
    }

    handleMessageInput = (event) => {
        this.setState({
            newMessage: event.target.value
        })
    }

    submitMessage = (event) => {
        event.preventDefault()

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
            console.log(result)
        })
    }

    render() {
        return (
            <div>
                { Object.keys(this.props.roomData.room).length > 0 ? (
                    <div>
                        <h1>Welcome to the {this.props.roomData.room.attributes.name} Room!</h1>
                        <ul>
                            {this.displayUsers(this.props.roomData.room.attributes.users.data)}
                        </ul>
                        <ChatFeed room={this.props.roomData.room} currentUser={this.props.currentUser} />
                    </div>
                ) : null }
                <RoomWebSocket
                    data-cableApp={this.props['data-cableApp']}
                    data-updateApp={this.props['data-updateApp']}
                    data-roomData={this.props['data-roomData']}
                    getRoomData={this.props.getRoomData}
                />
                <form onSubmit={this.submitMessage}>
                    <h3>Post a new message:</h3>
                    <textarea type='text' value={this.state.newMessage} onChange={this.handleMessageInput}></textarea>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default RoomShow