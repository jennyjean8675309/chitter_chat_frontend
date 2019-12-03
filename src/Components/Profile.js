import React, { Component } from 'react';

class Profile extends Component {
    render() {
        const { username, avatar_url } = this.props.currentUser.attributes
        return (
            <div>
                <h3>Profile Page for: </h3>
                <h1>{username}</h1>
                <img src={`http://localhost:3000/${avatar_url}`} alt={this.props.currentUser.username} />
            </div>

        )
    }
}

export default Profile