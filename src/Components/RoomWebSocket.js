import React, { Component } from 'react';

class RoomWebSocket extends Component {
    componentDidMount() {
        this.props.getRoomData(window.location.href.match(/\d+$/)[0])
        this.props['data-cableApp'].room = this.props['data-cableApp'].cable.subscriptions.create({
            channel: 'RoomsChannel',
            room: window.location.href.match(/\d+$/)[0]
        }, 
        {
            received: (newRoom) => {
                this.props['data-updateApp'](newRoom)
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