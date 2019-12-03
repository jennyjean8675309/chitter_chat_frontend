import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/rooms'>Rooms</Link></li>
                    { props.currentUser ? (
                        <Fragment>
                            <Link to='/'><li onClick={props.logout} >Logout</li></Link>
                            <li>Welcome, {props.currentUser.attributes.username}</li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li><Link to='/login' >Login</Link></li>
                            <li><Link to='/create_account' >Create an Account</Link></li>
                        </Fragment>
                    )}   
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar