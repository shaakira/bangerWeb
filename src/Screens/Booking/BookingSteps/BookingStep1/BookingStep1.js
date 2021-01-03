import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "./BookingStep1.css";
import { MDBInput } from "mdbreact";
import moment from "moment";
import GoogleMapReact from "google-map-react";
import "react-day-picker/lib/style.css";
import TextField from "@material-ui/core/TextField";
import Booking from "../../Booking";
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BookingStep1 extends React.Component {
  state = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
    booking: {
      returnDate: moment().format("YYYY-MM-DD"),
      returnTime: "18:00",
      age: 18,
      pickUpDate: moment().format("YYYY-MM-DD"),
      pickUpTime: "08:00",
    },
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  handleOnChange = (e) => {
    const booking = { ...this.state.booking };
    booking[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ booking });
  };
  render() {
    return (
      <div>
        <Booking step={0} />
        <MDBContainer style={{ marginTop: "3rem" }}>
          <MDBRow>
            <MDBCol md="6" className="outer-container">
              <div style={{ marginTop: "2rem" }}>
                <div className="header-container">
                  <p>pickup</p>
                </div>
                <div className="cont">
                  <div className="out-cont">
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      PICKUP LOCATION
                    </h6>
                    <h6 style={{ fontWeight: "bold" }}>
                      Bangers & Co, Colombo 00200
                    </h6>
                  </div>
                  <div className="divider" />
                  <MDBRow>
                    <MDBCol
                      md="6"
                      style={{ padding: "1rem", marginLeft: "1rem" }}
                    >
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        PICKUP DATE
                      </h6>
                      <div>
                        <TextField
                          id="pickUpDate"
                          type="date"
                          name="pickUpDate"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          style={{ width: "100%" }}
                          variant="outlined"
                          value={this.state.booking.pickUpDate}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </MDBCol>
                    <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                    <MDBCol md="5" style={{ padding: "1rem" }}>
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        PICKUP TIME
                      </h6>
                      <form noValidate>
                        <TextField
                          id="pickUpTime"
                          type="time"
                          style={{ width: "100%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                          inputProps={{
                            step: 300, // 5 min
                          }}
                          name="pickUpTime"
                          value={this.state.booking.pickUpTime}
                          onChange={this.handleOnChange}
                        />
                      </form>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <div className="header-container">
                  <p>return</p>
                </div>
                <div className="cont">
                  <div className="out-cont">
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      RETURN LOCATION
                    </h6>
                    <h6 style={{ fontWeight: "bold" }}>
                      {" "}
                      Bangers & Co, Colombo 00200
                    </h6>
                  </div>
                  <div className="divider" />
                  <MDBRow>
                    <MDBCol
                      md="6"
                      style={{ padding: "1rem", marginLeft: "1rem" }}
                    >
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        RETURN DATE
                      </h6>
                      <TextField
                        id="returnDate"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: "100%" }}
                        variant="outlined"
                        name="returnDate"
                        value={this.state.booking.returnDate}
                        onChange={this.handleOnChange}
                      />
                    </MDBCol>
                    <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                    <MDBCol md="5" style={{ padding: "1rem" }}>
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        RETURN TIME
                      </h6>
                      <TextField
                        id="returnTime"
                        type="time"
                        defaultValue="18:00"
                        style={{ width: "100%" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        name="returnTime"
                        
                        value={this.state.booking.returnTime}
                        onChange={this.handleOnChange}
                      />
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>

              <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <div className="header-container">
                  <p>Driver's age</p>
                </div>
                <div className="cont">
                  <div className="out-cont">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, textTransform: "uppercase" }}
                    >
                      Driver's Age
                    </h6>

                    <MDBInput
                    id="age"
                    name="age"
                      borderColor="red"
                      style={{
                        borderColor: "white",
                        color: "black",
                        fontWeight: "bold",
                        marginTop: "-1.5rem",
                        marginBottom: "-1rem",
                      }}
                      type="text"
                      
                      value={this.state.booking.age}
                      onChange={this.handleOnChange}
                    />
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCcCql90XoUIThM9XmSbqNQtVSSgvcYx9k",
                }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </MDBCol>
          </MDBRow>
          <div
            style={{ marginTop: "4rem", float: "right", marginBottom: "4rem" }}
          >
            <MDBBtn variant="contained" color="amber">
              <Link
                style={{ color: "white" }}
                to={{
                  pathname: "/booking2",
                  state: { booking: this.state.booking },
                }}
              >
                select equipment
              </Link>

              <MDBIcon icon="chevron-right" style={{ marginLeft: "0.5rem" }} />
            </MDBBtn>
          </div>
        </MDBContainer>
      </div>
    );
  }
}
export default BookingStep1;
