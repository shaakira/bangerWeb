import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../BookingStep1/BookingStep1.css";
import TextField from "@material-ui/core/TextField";
import { MDBInput } from "mdbreact";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class BookingStep1 extends React.Component {
  state = {
    selectedDate: new Date().toLocaleDateString(),
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    return (
      <MDBContainer>
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
                  <h6 style={{ fontWeight: "bold" }}>Bangerandco,Colombo</h6>
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
                    <TextField
                      id="date"
                      type="date"
                      defaultValue={this.state.selectedDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="red"
                    />
                  </MDBCol>
                  <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                  <MDBCol md="5" style={{ padding: "1rem" }}>
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      PICKUP TIME
                    </h6>
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
                  <h6 style={{ fontWeight: "bold" }}>Bangerandco,Colombo</h6>
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
                  </MDBCol>
                  <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />
                  <MDBCol md="5" style={{ padding: "1rem" }}>
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      RETURN TIME
                    </h6>
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
                    }}
                   type='text'
                  />
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="6">
          <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcCql90XoUIThM9XmSbqNQtVSSgvcYx9k'}}
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
      </MDBContainer>
    );
  }
}
export default BookingStep1;
