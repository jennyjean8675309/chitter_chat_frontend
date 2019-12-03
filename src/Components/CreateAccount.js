import React, { Component } from 'react';
import { DirectUpload } from 'activestorage';

class CreateAccount extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            avatar: {}
        }
    }

    handleChange = (e) => {
        if (e.target.name === 'avatar') {
            this.setState({
                avatar: e.target.files[0]
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }    
    }

    // need to check the return values of these two fetch calls to be sure that everything is wired up correctly

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (this.state.password === this.state.passwordConfirmation) {
    //         fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({user: {
    //             username: this.state.username,
    //             password: this.state.password
    //         }})
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         localStorage.setItem('jwt_token', data.token)
    //         this.uploadFile(this.state.avatar, data.user)
    //     })
    //     } else {
    //         alert('Your password was not confirmed')
    //     } 
    // }

    // uploadFile = (file, user) => {
    //     const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
    //     upload.create((error, blob) => {
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             fetch(`http://localhost:3000/users/${user.id}`, {
    //                 method: 'PUT',
    //                 headers: {
    //                     'Content-Type': 'application/json' 
    //                 },
    //                 body: JSON.stringify({avatar: blob.signed_id})
    //             })
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 console.log('updated user', data)
    //                 this.props.updateCurrentUser(data)
    //                 this.props.routeProps.history.push('/profile')
    //             })
    //         }
    //     })
    // }

    render() {
        console.log(this.props)
        return (
              <div>
                <form>
                    <input type='text' name='username' value={this.state.username} onChange={(e) => this.handleChange(e)} placeholder='username' />
                    <input type='password' name='password' onChange={(e) => this.handleChange(e)} placeholder='password' />
                    <input type='password' name='passwordConfirmation' onChange={(e) => this.handleChange(e)} placeholder='confirm password' />
                    <input type='file' name='avatar' onChange={(e) => this.handleChange(e)} placeholder='avatar' direct_upload='true' />
                    <input type='submit' value='Create Account' />
                </form>
              </div>
            )
        }
}

export default CreateAccount