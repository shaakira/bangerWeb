/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import {MDBIcon,MDBBtn} from 'mdbreact';
import { Slide } from 'react-slideshow-image';
import ScrollAnimation from 'react-animate-on-scroll';
import "./../Testimonial/Testimonial.css";

class Testimonial extends React.Component{
  state = {
    reviewList: [],
  };

  getReviews = async () => {
    const { data: reviewList } = await axios.get(
      "http://localhost:8080/api/review/getAllReviews"
    );
    this.setState({ reviewList });
  };
  async componentDidMount() {
    this.getReviews();
  }
  render(){
    const data=this.state.reviewList;
    return (
      <div className="container-testimonial">
        <div>
          <div className="row " style={{ backgroundColor: "whiteSmoke",padding:'1rem',paddingTop:'2rem' }}>
            
            <div className="column" style={{ backgroundColor: "white",width:'60%'}}>
            <Slide arrows duration={3000} className="slider-container">
{data.map((review)=>(
 <div className="each-slide " >
 <div className="slider-item">

        <h4 className="font-weight-bold mb-4">{review.reviewer}</h4>
     <hr />
     <p className="dark-grey-text mt-4">
       <MDBIcon icon="quote-left" className="pr-2" />
       {review.review}
     </p>
       <MDBBtn outline color='yellow' tag='a' href="/aboutUs">
       View all
     </MDBBtn>
 </div>
</div>
))}
           
          
          
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
  }
  
};

export default Testimonial;
