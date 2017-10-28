import React, { Component } from 'react';
import img from '../img/mlassakoski.png';
import '../css/AboutMe.css';
import '../css/Styles.css';

class AboutMe extends Component {

    render() {
        return (
            <div className="panel-body">
                <div className="avatar-box">

                    <div className="row">
                        <div className="col s4">
                            <img src={img} alt="" className="circle" />
                        </div>
                        <div className="col s8">
                            <div className="description-box">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;