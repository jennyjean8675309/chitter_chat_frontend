import React, { Component, Fragment } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Profile from './Components/Profile';
import NotFound from './Components/NotFound';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      avatar: ''
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('jwt_token')
    if (token) {
      fetch('http://localhost:3000/profile', {
        headers: { "Authentication": `Bearer ${token}` }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
        currentUser: data.user,
        avatar: data.avatar_url
        })
      })
    }
  }

  updateCurrentUser = (data) => {
    this.setState({
      currentUser: data.user,
      avatar: data.avatar_url
    })
  }

  logout = () => {
    console.log('logging out...')
    localStorage.removeItem('jwt_token')
    this.setState({
      currentUser: null,
      avatar: ''
    })
  }

  render() {
    return (
      <Fragment>
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' render={() => {
            return this.state.currentUser ?
            <Redirect to='/profile' /> :
            <Login updateCurrentUser={this.updateCurrentUser} />
          }} />
          <Route exact path='/create_account' render={(props) => <CreateAccount updateCurrentUser={this.updateCurrentUser} routeProps={props} />} />
          <Route exact path='/profile' render={() => {
            return this.state.currentUser ? 
            <Profile currentUser={this.state.currentUser} avatar={this.state.avatar} /> :
            <Login updateCurrentUser={this.updateCurrentUser} />
          }} />
          <Route component={NotFound} /> 
        </Switch>
      </Fragment>
    );
  }

}

export default withRouter(App);
