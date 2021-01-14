import { MDBBtn, MDBIcon, MDBView } from "mdbreact";
import React from "react";
import NavBar from "../../../../Components/NavBar/NavBar";
class BookingSuccess extends React.Component {
  render() {
    return (
      <div id="minimalistintro">
        <NavBar />
        <MDBView>
          <div style={{}}>
            <div
              style={{
                height: "450px",
                maxWidth: "800px",
                marginTop: "8rem",
                textAlign: "center",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid #e6e6e4",
                padding: "2rem",
                borderRadius: "5px",
              }}
            >
              <MDBIcon
                far
                icon="check-circle"
                size="5x"
                style={{ color: "#25b840", marginBottom: "2rem" }}
              />
              <h2>
                <strong>You're all set !</strong>
              </h2>
              <h5 className="grey-text">Thanks for being awesome,</h5>
              <h5 className="grey-text">We hope you enjoy your booking !</h5>
              <div style={{ marginTop: "2rem" }}>
                <h5>Team,</h5>
                <h6 className="amber-text">Banger & Co </h6>
              </div>
              <div
                style={{
                  backgroundColor: "#d7edd5",
                  padding: "1rem",
                  marginTop: "1rem",
                }}
              >
                <h6 className="mb-2" style={{ fontSize: 13 }}>
                  <MDBIcon icon="exclamation" style={{ marginRight: "1rem" }} />
                  <strong>FREE CANCELLATION</strong> on bookings! Instant
                  confirmation when you reserve.<MDBBtn outline color='black' style={{marginLeft:'1rem'}} tag='a' href='/'>go home</MDBBtn>
                </h6>
              </div>
            </div>
          </div>
        </MDBView>
      </div>
    );
  }
}
export default BookingSuccess;
