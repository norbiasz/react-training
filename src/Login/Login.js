import React from 'react';
import { Redirect } from 'react-router-dom';
import authHelper from '../Helpres/AuthHelper'

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
        return <button onClick={this.onLogin}>Login</button>
    }
}

export default Login;

