import React from 'react';
import { createHashHistory } from 'history';
import { Redirect } from 'react-router-dom';
import authHelper from '../helpres/authHelper'

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
                <div className="container">
                    <button className="underline text-blue-400 hover:no-underline my-3" onClick={this.onLogout}>Logout</button>
                    <h2 className="font-bold text-xl">Private data</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sit amet risus id sagittis.
                        Curabitur id ante fringilla, pharetra magna id, congue velit. Phasellus lobortis dui sit amet tellus pretium maximus.
                        Praesent egestas leo magna, a tristique urna venenatis vitae. Nam mi nulla, posuere interdum justo ut, porttitor laoreet nibh.
                        Cras vestibulum elit ac malesuada auctor. Maecenas interdum sem in vulputate consequat. Fusce iaculis, ipsum sit amet
                        fermentum eleifend, augue turpis tincidunt urna, a hendrerit felis erat vel velit. Maecenas quis libero venenatis ipsum
                        scelerisque pretium. Quisque porta nisl ex, id consequat dolor pretium quis. Duis ultricies, metus ac vulputate accumsan.
                    </p>
                </div>
            )
        }
    }
}

export default Settings