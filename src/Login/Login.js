import React from 'react';
import { Redirect } from 'react-router-dom';
import authHelper from '../helpres/authHelper'

export class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    onLogin = () => {
        authHelper.authenticate(() => {
            this.setState({
                redirect: true
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/settings" />
        }
        return <button className="underline text-blue-400 hover:no-underline" onClick={this.onLogin}>Login</button>
    }
}

export default Login;

