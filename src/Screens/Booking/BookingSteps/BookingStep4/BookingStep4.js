import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBBtn,MDBIcon } from "mdbreact";
import vehicle from '../../../../Images/car1.jpg'
import Booking from "../../Booking";
class BookingStep4 extends React.Component {
  render() {
    return (
      <div>
            <Booking step={3} />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" style={{ padding: "2rem" }}>
              <div className="left-container">
                <h5>Driver Details</h5>
                <MDBRow>
                  <MDBCol>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                      FIRST NAME
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" ,textTransform:'capitalize'}}>
                      shaakira
                    </p>
                  </MDBCol>
                  <MDBCol>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                      LAST NAME
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" ,textTransform:'capitalize'}}>
                     mubarak
                    </p>
                  </MDBCol>
                </MDBRow>
                <hr style={{marginTop:'-0.2rem'}}/>
                <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                      EMAIL ADDRESS
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" }}>
                      shaakira@yahoo.com
                    </p>
                    <hr style={{marginTop:'-0.2rem'}}/>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                      PHONE NUMBER
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" }}>
                      077608444
                    </p>
                    <hr style={{marginTop:'-0.2rem'}}/>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                     NIC
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" }}>
                      978012329V
                    </p>
                    <hr style={{marginTop:'-0.2rem'}}/>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                      DRIVING LICENSE
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" }}>
                      7468939
                    </p>
              </div>
            </MDBCol>
            <MDBCol md="4" style={{ padding:'2rem' }}>
            <div className="left-container">
                <h5 >
                  Booking details
                </h5>
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  PICKUP LOCATION
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                  Bangers & Co
                  <br />
                  No. 388 Union Place
                  <br />
                  Colombo 00200
                  <br />
                  Sri Lanka
                </p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  PICKUP DATE, TIME
                </p>
                <p style={{ fontSize: "0.9rem" }}>20-01-2021, 8:30</p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  RETURN LOCATION
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                  Bangers & Co
                  <br />
                  No. 388 Union Place
                  <br />
                  Colombo 00200
                  <br />
                  Sri Lanka
                </p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  RETURN DATE, TIME
                </p>
                <p style={{ fontSize: "0.9rem" }}>20-01-2021, 8:30</p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  RENTAL PERIOD
                </p>
                <p style={{ fontSize: "0.9rem" }}>8 days</p>
              </div>
            </MDBCol>
            <MDBCol md="4" style={{ padding:'2rem' }}>
            <img src={vehicle} alt="" className="img-fluid"/>
            <div className="left-container">
            <h5 >
                  Vehicle Details
                </h5>
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  VEHICLE
                </p>
                <p style={{ fontSize: "0.9rem" }}>
               Audi
                </p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                 EXTRA EQUIPMENT
                </p>
                <p style={{ fontSize: "0.9rem" }}>1 x Baby seat - £ 10</p>
            </div>
            <div style={{ marginTop: "5rem" }}>
                <div className="row" style={{ marginLeft: "0.2rem" }}>
                  <h6>Selected vehicle</h6>
                  <p style={{ marginLeft: "5rem" }}>£ 0.00</p>
                </div>
                <div className="row" style={{ marginLeft: "0.2rem" ,marginTop:'-1rem'}}>
                  <h6>Extra equipments</h6>
                  <p style={{ marginLeft: "4.3rem" }}>£ 0.00</p>
                </div>
                <hr color="black" />
                <div className="row" style={{ marginLeft: "0.2rem" }}>
                  <p>Total</p>
                  <p style={{ marginLeft: "10rem" }}>£ 0.00</p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <div className="row" style={{ marginTop: "4rem" ,marginBottom:'4rem'}}>
              <div style={{ flex: 1 }}>
                <a style={{ color: "#ffab00" }} href="/booking3">
                  <MDBBtn outline color="amber">
                    <MDBIcon
                      icon="chevron-left"
                      style={{ marginRight: "0.5rem" }}
                    />
                    Back
                  </MDBBtn>
                </a>
              </div>

              <div style={{ float: "right" }}>
                <a style={{ color: "white" }} href="">
                  <MDBBtn variant="contained" color="amber">
                    book now
                    <MDBIcon
                      icon="chevron-right"
                      style={{ marginLeft: "0.5rem" }}
                    />
                  </MDBBtn>
                </a>
              </div>
            </div>
        </MDBContainer>
      </div>
    );
  }
}
export default BookingStep4;
