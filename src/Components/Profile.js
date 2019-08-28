import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>This is a profile page</h1>
                <h3>{this.props.currentUser.username}</h3>
                <img src={`http://localhost:3000/${this.props.avatar}`} />
            </div>

        )
    }
}

export default Profile