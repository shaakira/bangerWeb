/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";
import ScrollAnimation from "react-animate-on-scroll";
import slider1 from "../../Images/about.PNG";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "../AboutUsScreen/AboutUsScreen.css";

class AboutUsScreen extends React.Component {
  render() {
    return (
      <div id="minimalistintro">
        <NavBar active="aboutUs"/>
        <MDBView src={slider1}>
          <MDBMask />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', marginTop: '10rem',marginLeft:"-2rem" }}
          >
              <MDBRow>
              <MDBAnimation
                className='black-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
              >
                <ScrollAnimation animateIn="bounceInLeft">
                <h3 className='h1-responsive '>
                  Let us tell you <br/> Our story
                </h3>
                <div
                        style={{
                          height: "1px",
                          width: "5rem",
                          backgroundColor: "#ffb700",
                        }}
                      />
                <h6 className='mb-2' style={{marginTop:'2rem'}}>
                Guaranteed! Book Online Today. Low Cost Rental from banger&co.lk. Unbeatable Prices. No Credit Card Fees. We Speak Your Language.
                </h6>
             
                </ScrollAnimation>
          
              </MDBAnimation>
              </MDBRow>
          </MDBContainer>
        </MDBView>
       
        <div style={{marginTop:'5rem'}}>
        <Footer/>
        </div>
        
      </div>
    );
  }
}

export default AboutUsScreen;
