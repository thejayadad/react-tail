import {Routes, Route} from "react-router-dom";
import React from "react";
import {connect } from "react-redux";
import Homepage from "../components/Homepage";


const Main = props => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" render={props => <Homepage {...props} />} />
            </Routes>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default (connect(mapStateToProps, null))(Main);