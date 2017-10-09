import React, { Component } from 'react';
import img from '../img/mlassakoski.png';
import '../css/AboutMe.css';
import '../css/Styles.css';

class AboutMe extends Component {

    render() {
        return (
            <div className="panel-body">
                <div className="avatar-box">
                    <img src={img} alt="" className="circle" />
                </div>
            </div>
        );
    }
}

export default AboutMe;