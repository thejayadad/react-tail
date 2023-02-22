import {Link } from "react-router-dom";
import { Connect } from "react-redux";
import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component{
    render() {
        return (
            <nav>
                <Link className="logo" to="/">Notes</Link>
                <ul>
                    <li>
                    <Link className="link" to="/signup">SignUp</Link>
                    </li>
                    <li>
                    <Link className="link" to="/signin">SignIn</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);