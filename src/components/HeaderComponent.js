import React from "react";
import { Navbar, NavbarBrand, Nav, Collapse, NavItem, NavbarToggler, } from "reactstrap";
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div >
                <Navbar color="primary" light expand="md">
                    <NavbarBrand href="/"><img src="/assets/images/logo.png" alt="logo" height="40" width="50" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"><i className="fa fa-users"></i>Nhân Viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/departments"><i className="fa fa-id-card">Phòng Ban</i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/salary"><i className="fa fa-money">Bảng Lương</i></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        )
    }

}

export default Header;
