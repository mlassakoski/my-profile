import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import AboutMe from './AboutMe';

class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/aboutme' component={AboutMe} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;