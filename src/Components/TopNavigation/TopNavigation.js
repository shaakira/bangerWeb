import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,MDBIcon } from 'mdbreact';
import '../TopNavigation/TopNavigation.css'

class TopNavigation extends React.Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    handleLogout = () => {
        localStorage.clear();
    
      };

    render() {
        return (
            <MDBNavbar className="flexible-navbar top-stle" light expand="md">
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    
                    <MDBNavbarNav right>
                    <MDBNavItem>
                        <a href="/notification" ><MDBIcon far icon="bell" style={{marginRight:'1rem',marginTop:'1.2rem',color:'white'}} /></a>   
                       </MDBNavItem>
                       <div className="ver-line"/>
                     
                        <MDBNavItem>
                            <div className="dropdown">
                            <button
                            className="dropbtn"
                            style={{color:'white',height:'50px'}}
                          >
                            <p style={{fontSize:'0.9rem'}}>Hi,  {localStorage.getItem("username")}</p>
                            </button>
                            <div className="dropdown-content" style={{marginTop:'0.5rem'}}>
                            <a  href="/"style={{ color: "black" }} onClick={this.handleLogout}>
                              LOGOUT
                            </a>
                          </div>
                            </div>
                         
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;