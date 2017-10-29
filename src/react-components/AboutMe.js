import React, { Component } from 'react';
import img from '../img/mlassakoski.png';
import '../css/AboutMe.css';
import '../css/Styles.css';
import { Timeline } from 'react-chartkick';

class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                ['Embraer S/A', '2014-05', '2015-12'],
                ['GSW Software', '2015-12-', '2016-12'],
                ['Atech', '2017-01', new Date()]
            ],
            colors: ['#b00', '#666', '#123']
        };
    }

    render() {
        return (
            <div className='panel-body'>
                <div className='avatar-box'>

                    <div className='row'>
                        <div className='col s4'>
                            <img src={img} alt='' className='circle' />
                        </div>
                        <div className='col s8'>
                            <div className='description-box'>
                                <p>
                                    I have been working with Java since 2014. Currently I working focussed on frontend development. I love beauty and clean code,
                                    also love to lean new technologies.
                               </p>
                                <p>
                                    Java: Java Language and Platform, HTML, XHTML, CSS, Maven, JUnit, Mockito, Liquibase, Hibernate, JPA 2.0, Spring, WebServices and Jersey

                                    JavaScript: ES6, AngulasJs, Angular(2x, 4x), ReactJs, Jasmine, Mocha, node, TypeScript

                                    DataBases: Oracle, Hsql, H2, Mysql, Mongo
                                </p>

                            </div>

                            <Timeline data={this.state.data} colors={this.state.colors} />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;