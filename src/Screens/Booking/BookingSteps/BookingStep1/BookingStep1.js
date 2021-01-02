import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "./BookingStep1.css";
import { MDBInput } from "mdbreact";
import moment from "moment";
import GoogleMapReact from "google-map-react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import TextField from "@material-ui/core/TextField";
import Booking from "../../Booking";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BookingStep1 extends React.Component {
  state = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    return (
      <div>
        <Booking step={0}/>
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
                        {/* <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={`${formatDate(new Date())}`}
           
           
            /> */}
                        <TextField
                          id="date"
                          type="date"
                          defaultValue={moment().format("YYYY-MM-DD")}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          style={{ width: "100%" }}
                          variant="outlined"
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
                          id="time"
                          type="time"
                          defaultValue="08:00"
                          style={{ width: "100%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                          inputProps={{
                            step: 300, // 5 min
                          }}
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
                      {/* <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={`${formatDate(new Date())}`}
            /> */}
                      <TextField
                        id="date"
                        type="date"
                        defaultValue={moment().format("YYYY-MM-DD")}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: "100%" }}
                        variant="outlined"
                      />
                    </MDBCol>
                    <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                    <MDBCol md="5" style={{ padding: "1rem" }}>
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        RETURN TIME
                      </h6>
                      <TextField
                        id="time"
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
                      valueDefault="18"
                      borderColor="red"
                      style={{
                        borderColor: "white",
                        color: "black",
                        fontWeight: "bold",
                        marginTop: "-1.5rem",
                        marginBottom: "-1rem",
                      }}
                      type="text"
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
          <div style={{ marginTop: "4rem", float: "right",marginBottom:'4rem' }}>
            <MDBBtn variant="contained" color="amber"><a style={{color:"white"}} href="/booking2">
            select equipment
            </a>
              
              <MDBIcon icon="chevron-right" style={{ marginLeft: "0.5rem" }} />
            </MDBBtn>
          </div>
        </MDBContainer>
      </div>
    );
  }
}
export default BookingStep1;
