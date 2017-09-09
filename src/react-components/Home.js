import React, { Component } from 'react';
import '../css/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="main-box">
                    <p>Hi, I'm Mauricio.</p>
                    <p>Please check my social midias.</p>
                    <div className="main-box-social">
                        <a className="social-item" href='https://www.linkedin.com/in/mauriciolassakoski' target="_blank"><i className='fa fa-linkedin fa-2x'></i></a>
                        <a className="social-item" href='https://github.com/mlassakoski' target="_blank"><i className='fa fa-github fa-2x'></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;