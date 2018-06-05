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
import { connect } from 'react-redux';
import { createSession } from './App/loginActions';

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
    onSubmit() {
        console.log('test');
        this.props.dispatch(createSession('sherylj', '3p4dt3st'));
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">ePAD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
    </ul>
  </div>
</nav>
                        <Row className={styles.topBuffer}>
                        	<Col sm="4"/>
                            <Col sm="4">
                            	<Card body>
                                <form className={styles.formSignin}>
							      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
							      <label htmlFor="inputEmail" className="sr-only">Email address</label>
							      <input type="text" id="inputUser" className="form-control" placeholder="Username" required autoFocus />
							      <label htmlFor="inputPassword" className="sr-only">Password</label>
							      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
							      <div className="checkbox mb-3">
							        <label>
							          <input type="checkbox" value="remember-me" /> I agree to <a color="primary" href="#">Terms and Conditions</a>
							        </label>
							      </div>
							      <button className="btn btn-primary" type="submit" onClick={this.onSubmit.bind(this)}>Sign in</button>
                                  <p />
                                  <a href="#">Forgot Password?</a>
							    </form>
							    </Card>
                            </Col>
                        </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  token: state.token,
  loading: state.loading,
  error: state.login.error
});


export default connect(mapStateToProps)(App);
