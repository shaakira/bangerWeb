/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBBtn,
  MDBView,
  MDBContainer,MDBAnimation
} from 'mdbreact';
import ScrollAnimation from 'react-animate-on-scroll';
import './../IntroPg/IntroPg.css';
import slider1 from "../../Images/background.PNG";
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import FleetCarousel from '../FleetCarousel/FleetCarousel';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar';



class IntroPg extends React.Component {




  render() {
 
    return (
      <div id='minimalistintro'>
        <NavBar/>
        <MDBView src={slider1}>
          <MDBMask/>
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', marginTop: '10rem',marginLeft:"-2rem" }}
          >
              <MDBRow>
              <MDBAnimation
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