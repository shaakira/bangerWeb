import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBInput ,MDBBtn, MDBIcon } from "mdbreact";
import "../BookingStep3/BookingStep3.css";
import Booking from "../../Booking";

class BookingStep3 extends React.Component {
  render() {
    return (
        <div>
        <Booking step={2} />
      <div style={{ marginTop: "4rem" }}>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3">
              <div className="left-container">
                <h5 style={{ fontWeight: "bold", color: "gray" }}>
                  Booking details
                </h5>
                <p className="grey-text" style={{ marginTop: "1rem" }}>
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
                <p className="grey-text" style={{ marginTop: "1rem" }}>
                  PICKUP DATE, TIME
                </p>
                <p style={{ fontSize: "0.9rem" }}>20-01-2021, 8:30</p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem" }}>
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
                <p className="grey-text" style={{ marginTop: "1rem" }}>
                  RETURN DATE, TIME
                </p>
                <p style={{ fontSize: "0.9rem" }}>20-01-2021, 8:30</p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem" }}>
                  RENTAL PERIOD
                </p>
                <p style={{ fontSize: "0.9rem" }}>8 days</p>
              </div>
              <div style={{ marginTop: "2rem" }}>
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
            <MDBCol md="9">
            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div className="header-container" style={{width:'180px'}}>
                <p>driver details</p>
              </div>
              <div className="cont">
               
                <MDBRow>
                  <MDBCol
                    md="6"
                    style={{ padding: "1rem", marginLeft: "1rem" }}
                  >
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      FIRST NAME *
                    </h6>
                    <MDBInput
                    borderColor="red"
                    style={{
                      borderColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      marginTop:'-2rem',
                      marginBottom:'-1rem'
                    }}
                   type='text'
                  />
                   
                  </MDBCol>
                  <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                  <MDBCol md="5" style={{ padding: "1rem" }}>
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                     LAST NAME *
                    </h6>
                    <MDBInput
                    borderColor="red"
                    style={{
                      borderColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      marginTop:'-2rem',
                      marginBottom:'-1rem'
                    }}
                   type='text'
                  />
                  </MDBCol>
                </MDBRow>
                <div className="divider" />
                 <MDBRow>
                  <MDBCol
                    md="6"
                    style={{ padding: "1rem", marginLeft: "1rem" }}
                  >
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      EMAIL *
                    </h6>
                    <MDBInput
                    borderColor="red"
                    style={{
                      borderColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      marginTop:'-2rem',
                      marginBottom:'-1rem'
                    }}
                   type='email'
                  />
                   
                  </MDBCol>
                  <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                  <MDBCol md="5" style={{ padding: "1rem" }}>
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                     PHONE NUMBER *
                    </h6>
                    <MDBInput
                    borderColor="red"
                    style={{
                      borderColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      marginTop:'-2rem',
                      marginBottom:'-1rem'
                    }}
                   type='text'
                  />
                  </MDBCol>
                </MDBRow>
                <div className="divider" />
                 <MDBRow>
                  <MDBCol
                    md="6"
                    style={{ padding: "1rem", marginLeft: "1rem" }}
                  >
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      DRIVING LICENSE NUMBER*
                    </h6>
                    <MDBInput
                    borderColor="red"
                    style={{
                      borderColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      marginTop:'-2rem',
                      marginBottom:'-1rem'
                    }}
                   type='text'
                  />
                  </MDBCol>
                  <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                  <MDBCol md="5" style={{ padding: "1rem" }}>
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                     NIC *
                    </h6>
                    <MDBInput
                    borderColor="red"
                    style={{
                      borderColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      marginTop:'-2rem',
                      marginBottom:'-1rem'
                    }}
                   type='text'
                  />
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
            </MDBCol>
          </MDBRow>
          <div className="row" style={{ marginTop: "4rem" ,marginBottom:'4rem'}}>
              <div style={{ flex: 1 }}>
                <a style={{ color: "#ffab00" }} href="/booking2">
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
                <a style={{ color: "white" }} href="/booking4">
                  <MDBBtn variant="contained" color="amber">
                    booking summary
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
      </div>
    );
  }
}
export default BookingStep3;
