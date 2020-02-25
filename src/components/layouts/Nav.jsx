import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>
                        <i className="fab fa-github"></i> Github Finder 
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Nav
