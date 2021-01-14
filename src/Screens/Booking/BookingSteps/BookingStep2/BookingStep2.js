import React from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "../BookingStep2/BookingStep2.css";
import EquipmentCard from "../../../../Components/EquipmentCard/EquipmentCard";
import Booking from "../../Booking";
import { Link } from "react-router-dom";

class BookingStep2 extends React.Component {
  state = {
    equipmentList: [],
    booking: this.props.location.state.booking,
    data: [],
    period: "",
    total: "",
    bookingDetails: {
      bookingD: "",
      equipments: [],
      timePeriod: "",
      total: "",
    },
    vehicle: this.props.location.state.booking.vehicle,
  };
  async componentDidMount() {
    const { data: equipmentList } = await axios.get(
      "http://localhost:8080/api/equipment/getAllEquipments"
    );
    this.setState({ equipmentList });
    const msDiff =
      new Date(this.state.booking.returnDate) -
      new Date(this.state.booking.pickUpDate);
    //Future date - current date

    const difDate = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    if (difDate >= 1) {
      var total = difDate * this.state.booking.vehicle.price;
      this.setState({ period: difDate + " days", total: total });
    }
    if (difDate === 1) {
      var totals = difDate * this.state.booking.vehicle.price;
      this.setState({ period: difDate + " day", total: totals });
    }

    if (difDate === 0) {
      this.setState({ total: this.state.booking.vehicle.price });
      const date =
        this.state.booking.returnDate + " " + this.state.booking.returnTime;
      const t =
        this.state.booking.pickUpDate + " " + this.state.booking.pickUpTime;
      const timeDiff = new Date(date) - new Date(t); //Future date - current date
      const milliseconds = Math.abs(timeDiff);
      const hours = milliseconds / 36e5;
      if (hours >= 1) {
        this.setState({ period: hours + " hours" });
      }
      if (hours === 1) {
        this.setState({ period: hours + " hour" });
      }
    }
    this.setState({
      bookingDetails: {
        bookingD: this.state.booking,
        equipments: this.state.data,
        timePeriod: this.state.period,
        total: this.state.total,
      },
    });
  }
  render() {
    const equipmentData = this.state.equipmentList;

    var handleData = (val) => {
      if (val.count != null) {
        this.state.data.push(val);
      } else {
        var array = [...this.state.data]; // make a separate copy of the array
        var index = array.findIndex((x) => x.id === val.id);
        this.state.data.splice(index, 1);
      }
    };
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
                  <p style={{ fontSize: "0.9rem" }}>
                    {this.state.booking.pickUpDate} ,{" "}
                    {this.state.booking.pickUpTime}
                  </p>
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
                  <p style={{ fontSize: "0.9rem" }}>
                    {this.state.booking.returnDate} ,{" "}
                    {this.state.booking.returnTime}
                  </p>
                  <hr />
                  <p className="grey-text" style={{ marginTop: "1rem" }}>
                    RENTAL PERIOD
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>
                    <p>{this.state.period}</p>
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div className="row" style={{ marginLeft: "0.2rem" }}>
                    <h6>Selected vehicle</h6>
                    <p style={{ marginLeft: "5rem" }}>
                      £ {this.state.booking.vehicle.price}
                    </p>
                  </div>
                  <hr color="black" />
                  <div className="row" style={{ marginLeft: "0.2rem" }}>
                    <p>Total</p>
                    <p style={{ marginLeft: "10rem" }}>
                      £ {this.state.bookingDetails.total}
                    </p>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <h3 style={{ marginBottom: "2rem" }}>Add-On Options</h3>
                {equipmentData.map((equipment) => (
                  <EquipmentCard data={equipment} value={handleData} />
                ))}
              </MDBCol>
            </MDBRow>
            <div
              className="row"
              style={{ marginTop: "4rem", marginBottom: "4rem" }}
            >
              <div style={{ flex: 1 }}></div>

              <div style={{ float: "right" }}>
                <Link
                  style={{ color: "white" }}
                  to={{
                    pathname: "/booking3",
                    state: { bookingDetails: this.state.bookingDetails },
                  }}
                >
                  <MDBBtn variant="contained" color="amber">
                    driver's details
                    <MDBIcon
                      icon="chevron-right"
                      style={{ marginLeft: "0.5rem" }}
                    />
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
export default BookingStep2;
