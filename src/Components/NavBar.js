import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    { props.currentUser ? (
                        <Fragment>
                            <li>{props.currentUser.attributes.username}</li>
                            <li onClick={props.logout} >Logout</li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li><Link to='/login' >Login</Link></li>
                            <li><Link to='/create_account' >Create an Account</Link></li>
                        </Fragment>
                    )}
                    <li><Link to='/rooms'>Rooms</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar