/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBBtn,
  MDBView,
  MDBContainer,MDBAnimation
} from 'mdbreact';
import ScrollAnimation from 'react-animate-on-scroll';
import './../IntroPg/IntroPg.css';
import logo from '../../Images/logo.png'
import slider1 from "../../Images/background.PNG";
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import FleetCarousel from '../FleetCarousel/FleetCarousel';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact'



class IntroPg extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapsed } = this.state;
    const navStyle = { marginTop: '6rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='minimalistintro'>
        <Router>
          <div>
            <MDBNavbar
              color='white'
              dark
              expand='md'
              fixed='top'
              transparent
              scrolling
            >
              <MDBContainer>
                
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav  style={navStyle}>
                    <MDBNavItem active >
                      <MDBNavLink to='#!' style={{color:"black"}}>HOME</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'style={{color:"black"}}>FIND A CAR</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to='#!' style={{ marginTop:"-2rem"}}><img style={{height:"8rem",width:"8rem",}} src={logo}/></MDBNavLink>
                </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!' style={{color:"black"}}>ABOUT US</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!' style={{color:"black"}}>CONTACT</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView src={slider1}>
          <MDBMask/>
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', marginTop: '10rem',marginLeft:"-2rem" }}
          >
              <MDBRow>
              <MDBAnimation
                type='fadeInLeft'
                delay='.3s'
                className='black-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
              >
                <ScrollAnimation animateIn="bounceInLeft">
                <h1 className='h1-responsive font-weight-bold'>
                  Looking to save more <br/>on your rental car?
                </h1>
                <hr className='hr' style={{backgroundColor:'#ffb700',}}/>
                <h6 className='mb-2' style={{marginTop:'2rem'}}>
                Guaranteed! Book Online Today. Low Cost Rental from banger&co.lk. Unbeatable Prices. No Credit Card Fees. We Speak Your Language.
                </h6>
                <MDBBtn outline color='black' style={{marginTop:'5rem'}}>
                  Learn More
                </MDBBtn>
                </ScrollAnimation>
          
              </MDBAnimation>
              </MDBRow>
          </MDBContainer>
        </MDBView>
        <Features/>
        <FleetCarousel/>
        <Services/>
        <Testimonial/>
        <AboutUs/>
        <Contact/>
        <Footer/>
      </div>
    
    );
  }
}

export default IntroPg;