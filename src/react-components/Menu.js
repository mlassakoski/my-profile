import React, { Component } from 'react';
import $ from 'jquery';
import '../css/Menu.css';

class Menu extends Component {

    handleClick() {
        $(function () {
            $(".button-collapse").sideNav()
        });
    }

    render() {
        return (
            <div id="menu">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo"></a> {/*logo*/}
                        <a href="#" data-activates="menu-mobile" className="button-collapse">
                            <i onClick={this.handleClick} className="material-icons">menu</i>
                        </a>
                        <div className="ul-center">
                            <ul className="center hide-on-med-and-down">
                                <li><a href='#' target="_blank"><i className="left material-icons">home</i><span>Home</span></a></li>
                                <li><a href='#' target="_blank"><i className="left material-icons">person</i><span>About me</span></a></li>
                                <li><a href='#' target="_blank"><i className="left material-icons">code</i><span>Skills</span></a></li>
                                <li><a href='#' target="_blank"><i className="left material-icons">mail</i><span>Contact</span></a></li>
                            </ul>
                        </div>
                        <ul className="right">
                            <li><a href='https://www.linkedin.com/in/mauriciolassakoski' target="_blank"><i className='fa fa-linkedin fa-2x'></i></a></li>
                            <li><a href='https://github.com/mlassakoski' target="_blank"><i className='fa fa-github fa-2x'></i></a></li>
                        </ul>
                        <ul className="side-nav" id="menu-mobile">
                            <li><a href='#' target="_blank"><i className="left material-icons">home</i><span>Home</span></a></li>
                            <li><a href='#' target="_blank"><i className="left material-icons">person</i><span>About me</span></a></li>
                            <li><a href='#' target="_blank"><i className="left material-icons">code</i><span>Skills</span></a></li>
                            <li><a href='#' target="_blank"><i className="left material-icons">mail</i><span>Contact</span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;