import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom'
import Events from './events/events'
import Details from './details/details';
import Login from './login/login';
import NotFound from './notFound'
import Settings from './settings/settings';

class App extends React.Component {

    render() {
        return (
            <div className="bg-gray-200 w-screen h-screen">
                <Router>
                    <div className="flex items-center justify-center flex-col">
                        <div className="h-32 w-screen bg-black flex items-center justify-center flex-col">
                             <h1 className="text-2xl font-bold italic text-white mb-5">Events calendar</h1>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                        <ul className="flex my-5">
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
                            <Route path="/about"
                                render={() =>
                                    <div className="container">
                                        <h1 className="text-4xl">About Me</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac augue nec aliquam. Etiam vitae porta nisl, a dapibus dui. Praesent scelerisque, nisl feugiat pharetra ultrices, quam turpis elementum sem, vulputate suscipit urna ex eu justo. Suspendisse vel dapibus elit. Suspendisse tellus lectus, tempus vel ultrices nec, accumsan ut arcu. Suspendisse egestas consectetur leo. Vestibulum a mauris tellus. Nunc sodales arcu nec felis varius, at placerat elit elementum. Ut sed velit sed lacus varius semper. Vivamus gravida nisi sit amet ultricies porttitor. In varius augue ut mauris dapibus elementum. Cras vestibulum ipsum lacus, id rutrum est tempus nec.</p>
                                        <Link className="underline text-blue-400 hover:no-underline" to="/">Cofnij</Link>
                                    </div>
                                }
                            />
                            <Route path="/details/:eventId" component={Details} />
                            <Route path="/" component={Events}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;