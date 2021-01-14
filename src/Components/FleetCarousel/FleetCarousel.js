/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Slide } from 'react-slideshow-image';
import {MDBBtn} from 'mdbreact';
import slider1 from '../../Images/slider1.jpg';
import slider2 from '../../Images/slider2.jpg';
import slider3 from '../../Images/slider3.jpg';
import slider4 from '../../Images/slider4.jpg';
import slider5 from '../../Images/slider5.jpg';

import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5
];

const FleetCarousel = () => {
    return (
      <section className="text-center my-5" style={{paddingTop:'3rem'}}>
        <div style={{backgroundColor:'#F8F8F8',padding:'1.5rem'}}>
       
        <h3 className="font-weight-bold">
         We have one of the newest fleets
        </h3>
      <div  style={{backgroundColor:'#ffb700', height:'0.01rem', margin:'1rem'}}/>
        <p className=" grey-text">
         These are some of our most popular vehicles
        </p>
        </div>
       
  <div className="slide-container" style={{marginInline:'10rem'}}>
        <Slide arrows={false} duration={1000} >
          <div className="each-slide">
            <div style={{textAlign:'center',display:'block'}}>
              <img src={slideImages[0]} />
                  <p className="font-weight-bold">SMALL TOWN CARS</p>
                  <MDBBtn outline color='yellow' tag='a' href="/fleet">
                  View all
                </MDBBtn>
            </div>
          </div>
          <div className="each-slide">
            <div style={{textAlign:'center',display:'block'}}>
            <img src={slideImages[1]}/>
            <p className="font-weight-bold">SMALL FAMILY HATCHBACK</p>
            <MDBBtn outline color='yellow' tag='a' href="/fleet">
                 View  all
                </MDBBtn>
            </div>
          </div>
          <div className="each-slide">
            <div style={{textAlign:'center',display:'block'}}>
            <img src={slideImages[2]}/>
            <p className="font-weight-bold">FAMILY SALOON CARS</p>
            <MDBBtn outline color='yellow' tag='a' href="/fleet">
               view all
                </MDBBtn>
            </div>
          </div>
          <div className="each-slide">
            <div style={{textAlign:'center',display:'block'}}>
            <img src={slideImages[3]}/>
            <p className="font-weight-bold">FAMILY ESTATE CARS</p>
            <MDBBtn outline color='yellow' tag='a' href="/fleet">
                 view all
                </MDBBtn>
            </div>
          </div>  
          <div className="each-slide">
            <div style={{textAlign:'center',display:'block'}}>
            <img src={slideImages[4]}/>
            <p className="font-weight-bold">MEDIUM VANS</p>
            <MDBBtn outline color='yellow' tag='a' href="/fleet">
                  view all
                </MDBBtn>
            </div>
          </div>  
        
        </Slide>
      </div>
      </section>
    
    )
}
export default FleetCarousel;