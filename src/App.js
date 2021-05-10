import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom'
import Events from './Events/Events'
import Details from './Details/Details';
import Login from './Login/Login';
import NotFound from './NotFound'
import Settings from './Settings/Settings';

class App extends React.Component {

    render() {
        return (
            <div className="bg-gray-200">
                <Router>
                    <div className="w-screen h-screen items-center flex justify-center flex-col">
                        <h1 className="text-2xl font-bold text-gray-600 mb-5">Meeting calendar</h1>
                        <ul className="flex mb-5">
                            <li className="mr-6 p-2 border rounded-md border-gray-700  text-gray-600 hover:text-gray-600 hover:border-gray-500">
                                <NavLink to="/" exact
                                    activeStyle={{
                                        fontWeight: 'bold'
                                    }}
                                >Home</NavLink>
                            </li>
                            <li className="mr-6 p-2 border rounded-md border-gray-700  text-gray-600 hover:text-gray-600 hover:border-gray-500">
                                <NavLink to="/about"
                                    activeStyle={{
                                        fontWeight: 'bold'
                                    }}
                                >About Me</NavLink>
                            </li>
                            <li className="mr-6 p-2 border rounded-md border-gray-700  text-gray-600 hover:text-gray-600 hover:border-gray-500">
                                <NavLink to="/settings"
                                    activeStyle={{
                                        fontWeight: 'bold'
                                    }}
                                >Settings</NavLink>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/settings" component={Settings}></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/about" render={() => <div><h1>About Me</h1> <Link to="/">Cofnij</Link></div>} />
                            <Route path="/details/:eventId" component={Details} />
                            <Route path="/" component={Events}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;