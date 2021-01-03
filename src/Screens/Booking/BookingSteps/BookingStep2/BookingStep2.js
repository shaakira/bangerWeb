import React from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "../BookingStep2/BookingStep2.css";
import EquipmentCard from "../../../../Components/EquipmentCard/EquipmentCard";
import Booking from "../../Booking";

class BookingStep2 extends React.Component {
  state = {
    equipmentList: [],
    booking:this.props.location.state.booking,
    days:0,
    hours:0
  };
  async componentDidMount() {
    const { data: equipmentList } = await axios.get(
      "http://localhost:8080/api/equipment/getAllEquipments"
    );
    this.setState({ equipmentList });
    const msDiff = new Date(this.state.booking.returnDate)- new Date(this.state.booking.pickUpDate);    //Future date - current date
    const difDate = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    this.setState({days:difDate})
    if(difDate===0){
      const date=this.state.booking.returnDate+" "+this.state.booking.returnTime;
      const t=this.state.booking.pickUpDate+" "+this.state.booking.pickUpTime;
      const timeDiff = new Date(date)- new Date(t);    //Future date - current date
      const milliseconds = Math.abs(timeDiff);
      const hours = milliseconds / 36e5;
      this.setState({hours:hours})
    }



    //  console.log(this.state.vehicleList);
  }
  render() {
    const equipmentData = this.state.equipmentList;
    return (
      <div>
        <Booking step={1} />
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
                  <p style={{ fontSize: "0.9rem" }}>{this.state.booking.pickUpDate} , {this.state.booking.pickUpTime}</p>
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
                  <p style={{ fontSize: "0.9rem" }}>{this.state.booking.returnDate} , {this.state.booking.returnTime}</p>
                  <hr />
                  <p className="grey-text" style={{ marginTop: "1rem" }}>
                    RENTAL PERIOD
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>{this.state.days===0?(<p>{this.state.hours} {this.state.hours===1? "hour":"hours"}</p>
                    ):(<p>{this.state.days} days</p>)}</p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div className="row" style={{ marginLeft: "0.2rem" }}>
                    <h6>Selected vehicle</h6>
                    <p style={{ marginLeft: "5rem" }}>£ 0.00</p>
                  </div>
                  <hr color="black" />
                  <div className="row" style={{ marginLeft: "0.2rem" }}>
                    <p>Total</p>
                    <p style={{ marginLeft: "10rem" }}>£ 0.00</p>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <h3 style={{ marginBottom: "2rem" }}>Add-On Options</h3>
                {equipmentData.map((equipment) => (
                  <EquipmentCard data={equipment} />
                ))}
              </MDBCol>
            </MDBRow>
            <div className="row" style={{ marginTop: "4rem" ,marginBottom:'4rem'}}>
              <div style={{ flex: 1 }}>
                <a style={{ color: "#ffab00" }} href="/booking1">
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
                <a style={{ color: "white" }} href="/booking3">
                  <MDBBtn variant="contained" color="amber">
                    driver's details
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
export default BookingStep2;
