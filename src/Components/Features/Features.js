/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {  MDBRow, MDBCol } from "mdbreact";
import find from "../../Images/car.png";
import date from "../../Images/calendar.png";
import book from "../../Images/rent.png";
import topArrow from "../../Images/topArrow.png";
import bottomArrow from "../../Images/bottomArrow.png";
import './../Features/Features.css';



const Features = () => {
  return (
      <section className="text-center my-5" style={{margin:'5rem',paddingTop:'3rem'}}>
        <p className="h-responsive  my-3 grey-text">
          HOW IT WORKS
        </p>
        <h3 className="font-weight-bold mx-auto mb-5">
         Banger & Co following 3 working Steps
        </h3>
        <MDBRow style={{paddingTop:'2rem'}} center>
          <MDBCol md="3" >
          <img style={{height:"4rem",width:"4rem",}} src={find}/>
            <h5 className=" my-4">Find a car</h5>
            <p className="grey-text mb-md-0 mb-5">
            Find and Compare Great Car Deals. Book with Confidence on BANGER&Co®! Monitor Car Deals for Specific Travel Dates. Free price comparison.
            </p>
          </MDBCol>
          <img style={{height:"5rem",width:"5rem",marginLeft:'-2rem',marginRight:'-2rem'}} src={topArrow}/>
    
          <MDBCol md="3">
          <img style={{height:"4rem",width:"4rem",}} src={date}/>
            <h5 className="my-4">Pick-up date</h5>
            <p className="grey-text mb-md-0 mb-5">
            Find and book the car type and the dates you want with price comparison for a great deal and experience. 
            </p>
          </MDBCol>
          <img style={{height:"5rem",width:"5rem",marginLeft:'-2rem',marginRight:'-2rem'}} src={bottomArrow}/>


          <MDBCol md="3">
          <img style={{height:"4rem",width:"4rem",}} src={book}/>
            <h5 className="my-4">Book your car</h5>
            <p className="grey-text mb-md-0 mb-5">
            Book the master pieces of car collection provided from banger and Co for a good price and enjoy the services provided.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Features;