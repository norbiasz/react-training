import React from 'react';
import { createHashHistory } from 'history';
import { Redirect } from 'react-router-dom';
import authHelper from '../Helpres/AuthHelper'

export class Settings extends React.Component {

    onLogout = () => {
        const history = createHashHistory();
        authHelper.signout()
        return history.go("/login");
    }

    render() {
        if (!authHelper.isAuthenticated) {
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <p>Your private data</p>
                    <button onClick={this.onLogout}>Logout</button>
                </div>
            )
        }
    }
}

export default Settings