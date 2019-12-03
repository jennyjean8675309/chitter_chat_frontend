import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })    
        })
        .then(response => response.json())
        .then(data => {
            if (data.authenticated) {
                localStorage.setItem('jwt_token', data.token)
                this.props.updateCurrentUser(data.user.data)
            } else {
                alert('Password/Username combination not found')
            }   
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <input type='text' name='username' value={this.state.username} onChange={(e) => this.handleChange(e)} placeholder='username' />
                    <input type='password' name='password' onChange={(e) => this.handleChange(e)} placeholder='password' />
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default Login