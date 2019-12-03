import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Rooms extends Component {
    displayRooms = (rooms) => {
        // if a user clicks on the subscribe button, I can send them an alert that welcomes them to the room and prompts them to post a message to make their subscription 'official'
        let usersRooms = null
        if (this.props.currentUser) {
            usersRooms = this.props.currentUser.attributes.rooms
        }
        return rooms.map( (room) => {
            const { name, description } = room.attributes
            return (
            <div key={room.id}>
                <h3>{name}</h3>
                <p>{description}</p>
                { usersRooms && usersRooms.some( userRoom => userRoom.id === parseInt(room.id) ) ? (
                    <Link to={`/rooms/${room.id}`}><button>Enter</button></Link>
                ) : (
                    <Link to={`/rooms/${room.id}`}><button id={room.id} onClick={this.props.handleSubscribe}>Subscribe</button></Link>
                ) }
            </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Current Rooms</h1>
                {this.displayRooms(this.props.allRooms)}
            </div>
        )
    }
}

export default Rooms