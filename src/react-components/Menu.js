import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import '../css/Menu.css';

class Menu extends Component {

    componentDidMount() {
        $(function () {
            $('.button-collapse').sideNav({
                menuWidth: 300, 
                closeOnClick: true, 
                draggable: true,
              }
            );
        });
    }

    render() {
        return (
            <div id='menu'>
                <nav>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'></Link> {/*logo*/}
                        <a data-activates='menu-mobile' className='button-collapse'>
                            <i className='material-icons'>menu</i>
                        </a>
                        <div className='ul-center'>
                            <ul className='center hide-on-med-and-down'>
                                <li><Link to='/'><i className='left material-icons'>home</i><span>Home</span></Link></li>
                                <li><Link to='/aboutme'><i className='left material-icons'>person</i><span>About me</span></Link></li>
                                <li><Link to='/skills'><i className='left material-icons'>code</i><span>Skills</span></Link></li>
                                <li><Link to='/contact'><i className='left material-icons'>mail</i><span>Contact</span></Link></li>
                            </ul>
                        </div>
                        <ul className='right'>
                            <li><a href='https://www.linkedin.com/in/mauriciolassakoski' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin fa-2x'></i></a></li>
                            <li><a href='https://github.com/mlassakoski' target='_blank' rel='noopener noreferrer'><i className='fa fa-github fa-2x'></i></a></li>
                        </ul>
                        <ul className='side-nav' id='menu-mobile'>
                            <li><Link to='/'><i className='left material-icons'>home</i><span>Home</span></Link></li>
                            <li><Link to='/aboutme'><i className='left material-icons'>person</i><span>About me</span></Link></li>
                            <li><Link to='/skills'><i className='left material-icons'>code</i><span>Skills</span></Link></li>
                            <li><Link to='/contact'><i className='left material-icons'>mail</i><span>Contact</span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;