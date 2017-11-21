import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hoverState: false, loggedIn: false };
    }

    toggleHover() {
        this.setState({ hoverState: !this.state.hoverState })
    }

    render() {
        var style = { fontSize: '1.3em', color: 'red' }
        if (this.state.hoverState) {
            style = { fontSize: '1.3em', color: 'red', fontWeight: 'bold' }
        }
        let AuthButton;
        if(this.state.loggedIn){
            AuthButton = 
            <Nav pullRight>
                <NavItem ><span onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)} style={style}>Logout</span></NavItem>
            </Nav>
        }
        else{
            AuthButton = 
            <Nav pullRight>
                <NavItem><span onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)} style={style}>Login</span></NavItem>
            </Nav>
            
        }

        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Test App
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to='/'>
                            <NavItem eventKey={1}>Home</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to='/menu1'>
                            <NavItem eventKey={2}>Menu1</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to='/menu2'>
                            <NavItem eventKey={3}>Menu2</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to='/menu3'>
                            <NavItem eventKey={4}>Menu3</NavItem>
                        </IndexLinkContainer>
                    </Nav>
                    {AuthButton}
                </Navbar.Collapse>
            </Navbar>
        );

        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
};

