import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';

class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/aboutme' component={AboutMe} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;

