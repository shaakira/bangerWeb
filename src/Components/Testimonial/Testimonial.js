/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {MDBIcon,MDBBtn} from 'mdbreact';
import { Slide } from 'react-slideshow-image';
import ScrollAnimation from 'react-animate-on-scroll';
import "./../Testimonial/Testimonial.css";

const Testimonial = () => {
  return (
    <div className="container-testimonial">
      <div>
        <div className="row " style={{ backgroundColor: "whiteSmoke",padding:'1rem',paddingTop:'2rem' }}>
          
          <div className="column" style={{ backgroundColor: "white",width:'60%'}}>
          <Slide arrows duration={3000} className="slider-container">
          <div className="each-slide " >
            <div className="slider-item">
        
                   <h4 className="font-weight-bold mb-4">John Doe</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
                  <MDBBtn outline color='yellow'>
                  View all
                </MDBBtn>
            </div>
          </div>
          <div className="each-slide">
            <div className="slider-item">
            <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Neque cupiditate assumenda in maiores repudiandae mollitia
                  architecto.
                </p>
            <MDBBtn outline color='yellow'>
                 View  all
                </MDBBtn>
            </div>
          </div>
          <div className="each-slide">
            <div className="slider-item">
            <h4 className="font-weight-bold mb-4">Maria Kate</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
            <MDBBtn outline color='yellow'>
               view all
                </MDBBtn>
            </div>
          </div>
        
        
        </Slide>
          </div>
          <div className="column inner-container">
            <ScrollAnimation animateIn="bounceInRight">
            <MDBIcon icon='quote-left' size="lg" className="amber-text"/>
            <h1 className="font-weight-bold mx-auto mb-4">
             What Our<br/>Customers<br/>Are Saying
              
            </h1>
            <div
              style={{
                backgroundColor: "#ffb700",
                height: "0.1rem",
                width: "5rem",
              }}
            />
            </ScrollAnimation>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
