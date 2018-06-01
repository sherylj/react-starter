import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button, Card
} from 'reactstrap';

import styles from './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="bg-gradient-dark">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">ePAD</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                    	<div className="bg-dark">
                        <Row>
                        	<Col sm="4"/>
                            <Col sm="4">
                            	<Card body dark="true">
                                <form className={styles.formSignin}>
							      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
							      <label htmlFor="inputEmail" className="sr-only">Email address</label>
							      <input type="text" id="inputUser" className="form-control" placeholder="Username" required autoFocus />
							      <label htmlFor="inputPassword" className="sr-only">Password</label>
							      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
							      <div className="checkbox mb-3">
							        <label>
							          <input type="checkbox" value="remember-me" /> I agree to <a href="#">Terms and Conditions</a>
							        </label>
							      </div>
							      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                  <a href="#">Forgot Password?</a>
							    </form>
							    </Card>
                            </Col>
                        </Row>
                        </div>
            </div>
        );
    }
}

export default App;