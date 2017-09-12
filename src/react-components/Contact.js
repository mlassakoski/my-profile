import React, { Component } from 'react';
import '../css/Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact-form">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">Last Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">Subject</label>
                            </div>
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label for="textarea1">Message</label>
                            </div>
                        </div>
                        <button className="btn waves-effect orange darken-4 right" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;