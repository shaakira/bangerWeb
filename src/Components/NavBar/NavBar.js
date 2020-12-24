/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact";
import "./../IntroPg/IntroPg.css";
import logo from "../../Images/logo.png";

class NavBar extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  render() {
    const { collapsed } = this.state;
    const navStyle = { marginTop: "6rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <Router>
        <div>
          <MDBNavbar
            color="white"
            dark
            expand="md"
            fixed="top"
            transparent
            scrolling
          >
            <MDBContainer>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav style={navStyle}>
                  <MDBNavItem style={{marginTop:'-1rem'}}>
                    <a href="/" style={{ color: "black" }}>
                      HOME
                    </a>
                  </MDBNavItem>
                  <MDBNavItem style={{marginTop:'-1rem'}}>
                    <a href="/fleet" style={{ color: "black" }}>
                      FIND A CAR
                    </a>
                  </MDBNavItem>
                  <MDBNavItem style={{marginTop:'-1rem'}}>
                    <a href="/">
                      <img
                        style={{ height: "8rem", width: "8rem",marginTop:'-2rem' }}
                        src={logo}
                      />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem style={{marginTop:'-1rem'}}>
                    <a href="/aboutUs" style={{ color: "black" }}>
                      ABOUT US
                    </a>
                  </MDBNavItem>
                  <MDBNavItem style={{marginTop:'-1rem'}}>
                    <a href="/contact" style={{ color: "black" }}>
                      CONTACT
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
      </Router>
    );
  }
}

export default NavBar;
