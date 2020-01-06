import React, { Component } from 'react';

class RoomWebSocket extends Component {
    componentDidMount() {
        // if I don't use the getRoomData() function here, nothing renders on the RoomShow component
        this.props.getRoomData(window.location.href.match(/\d+$/)[0])
        // the subscriptions.create() method is sending params to the subscribed action in my RoomsChannel
        this.props.cableApp.room = this.props.cableApp.cable.subscriptions.create({
            channel: 'RoomsChannel',
            room: window.location.href.match(/\d+$/)[0]
        }, 
        {
            received: (updatedRoom) => {
                this.props.updateApp(updatedRoom)
            }
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default RoomWebSocket