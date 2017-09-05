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
                        <ul className="right hide-on-med-and-down">
                            <li><a href='https://www.linkedin.com/in/mauriciolassakoski' target="_blank"><i className='fa fa-linkedin fa-2x'></i></a></li>
                            <li><a href='https://github.com/mlassakoski' target="_blank"><i className='fa fa-github fa-2x'></i></a></li>
                        </ul>
                        <ul className="side-nav" id="menu-mobile">
                            {/* <li><a href='sass.html'><i className='fa fa-linkedin fa-2x'></i></a></li>
							<li><a href='collapsible.html'><i className='fa fa-github fa-2x'></i></a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;