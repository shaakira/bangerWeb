import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBBtn,MDBIcon } from "mdbreact";
import vehicle from '../../../../Images/car1.jpg'
import Booking from "../../Booking";
import { Link } from "react-router-dom";
import axios from "axios";
class BookingStep4 extends React.Component {

  state={
    bookingSummary:this.props.location.state.bookingSummary,
    bookingDetails: {
      bookingD: "",
      equipments: [],
      timePeriod: "",
    },
    booking:{
      age:"",
      pickUpDate:"",
      returnDate:"",
      pickUpTime:"",
      returnTime:"",
      vehicleID:"",
      timePeriod:"",
      userName:"",
      driver:{},
      equipment:[],
      total:""
    }

  }
  componentDidMount(){
    console.log("");
    const details=this.state.bookingSummary.bookingDetails;
    const driver=this.state.bookingSummary.driver;
    const vehicle=this.state.bookingSummary.bookingDetails.bookingD.vehicle;
    const request=this.state.bookingSummary.bookingDetails.bookingD;
    this.setState({bookingDetails:{ bookingD:details.bookingD,equipments:details.equipments,timePeriod:details.timePeriod}})
    this.setState({booking:{
    age:details.bookingD.age,
      total:request.total,
    pickUpDate:request.pickUpDate,
    pickUpTime:request.pickUpTime,
    returnDate:request.returnDate,
    returnTime:request.returnTime,
    vehicleId:vehicle.id,
    timePeriod:details.timePeriod,
    userName:localStorage.getItem("username"),
    driver:driver,
    equipment:details.equipments,
    total:this.state.bookingSummary.total
    }})
  }

  handleSubmit= async () => {
console.log(this.state.bookingSummary)
    let token = localStorage.getItem("token");
    await axios
      .post(`http://localhost:8080/api/booking/addBooking`,this.state.booking, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.setState({ user: res.data });
        }
      })  
      .catch((error) => { 
        console.log(error.response.data.message);  
        });

  }


  render() {
    const detail=this.state.bookingSummary
    const equipmentList=this.state.bookingSummary.bookingDetails.equipments
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
                      {detail.driver.firstName}
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
                    {detail.driver.lastName}
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
                    {detail.driver.email}
                    </p>
                    <hr style={{marginTop:'-0.2rem'}}/>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                      PHONE NUMBER
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" }}>
                    {detail.driver.phoneNumber}
                    </p>
                    <hr style={{marginTop:'-0.2rem'}}/>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                     NIC
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" }}>
                    {detail.driver.nic}
                    </p>
                    <hr style={{marginTop:'-0.2rem'}}/>
                    <p
                      className="grey-text"
                      style={{ marginTop: "1rem", fontSize: "0.8rem" }}
                    >
                      DRIVING LICENSE
                    </p>
                    <p style={{ fontSize: "0.9rem", marginTop: "-1rem" }}>
                    {detail.driver.licenseNo}
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
                <p style={{ fontSize: "0.9rem" }}>{detail.bookingDetails.bookingD.pickUpDate}, {detail.bookingDetails.bookingD.pickUpTime} </p>
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
                <p style={{ fontSize: "0.9rem" }}>{detail.bookingDetails.bookingD.returnDate}, {detail.bookingDetails.bookingD.returnTime}</p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  RENTAL PERIOD
                </p>
                <p style={{ fontSize: "0.9rem" }}>{detail.bookingDetails.timePeriod}</p>
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
                <p style={{ fontSize: "0.9rem" ,textTransform:"capitalize"}}>
                {detail.bookingDetails.bookingD.vehicle.name}
                </p>
                <hr />
                <p className="grey-text" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                 EXTRA EQUIPMENT
                </p>
                {equipmentList.map((equipment) => (
                 <p style={{ fontSize: "0.9rem" }}>{equipment.count} x {equipment.name} - £ {equipment.price}</p>
                ))}
                
            </div>
            <div style={{ marginTop: "5rem" }}>
                <div className="row" style={{ marginLeft: "0.2rem" }}>
                  <h6>Selected vehicle</h6>
                  <p style={{ marginLeft: "5rem" }}>£  {detail.bookingDetails.total}</p>
                </div>
                <div className="row" style={{ marginLeft: "0.2rem" ,marginTop:'-1rem'}}>
                  <h6>Extra equipments</h6>
                  <p style={{ marginLeft: "4.3rem" }}>£ {detail.equipmentPrice}</p>
                </div>
                <hr color="black" />
                <div className="row" style={{ marginLeft: "0.2rem" }}>
                  <p>Total</p>
                  <p style={{ marginLeft: "10rem" }}>£ {detail.total}</p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <div className="row" style={{ marginTop: "4rem" ,marginBottom:'4rem'}}>
              <div style={{ flex: 1 }}>
              <Link
                  style={{ color: "#ffb700" }}
                  to={{
                    pathname: "/booking3",
                    state: { bookingDetails: this.state.bookingDetails },
                  }}
                >
                  <MDBBtn outline color="amber">
                    <MDBIcon
                      icon="chevron-left"
                      style={{ marginRight: "0.5rem" }}
                    />
                    Back
                  </MDBBtn>
                </Link>
              </div>

              <div style={{ float: "right" }}>
                {/* <a style={{ color: "white" }} href=""> */}
                  <MDBBtn onClick={this.handleSubmit} variant="contained" color="amber">
                    book now
                    <MDBIcon
                      icon="chevron-right"
                      style={{ marginLeft: "0.5rem" }}
                    />
                  </MDBBtn>
                {/* </a> */}
              </div>
            </div>
        </MDBContainer>
      </div>
    );
  }
}
export default BookingStep4;
