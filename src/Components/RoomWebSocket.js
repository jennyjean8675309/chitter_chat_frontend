import React, { Component } from 'react';

class RoomWebSocket extends Component {
    componentDidMount() {
        // tried to pass in the room id as props from the roomShow component, but I lose state at this point and all values are empty
        // if I don't use this function here, nothing renders on the roomShow component
        this.props.getRoomData(window.location.href.match(/\d+$/)[0])
        // the subscriptions.create() method is sending params to the subscribed action in my RoomsChannel
        this.props.cableApp.room = this.props.cableApp.cable.subscriptions.create({
            channel: 'RoomsChannel',
            room: window.location.href.match(/\d+$/)[0]
        }, 
        {
            received: (newRoom) => {
                console.log(newRoom)
                this.props.updateApp(newRoom)
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