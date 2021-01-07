import React from "react";
import { MDBBtn, MDBIcon, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "../UpcomingBookings/UpcomingBookings.css";
import { BrowserRouter } from "react-router-dom";
import CustomerBookings from "../../CustomerBookings/CustomerBookings";
import BookingCard from "../../../Components/BookingCard/BookingCard"
class UpcomingBookings extends React.Component {
  render() {
    return (
      <div>
        <CustomerBookings />
        <div className="booking-cont">
        <BrowserRouter>
          <MDBNav className="nav-tabs " style={{ marginTop: "-4rem"}} >
            <MDBNavItem>
              <MDBNavLink active to="myBookings">
                Upcoming Bookings
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <div style={{ marginTop: "-3.4rem", float: "right" }}>
          <a style={{color:'grey'}} href="/pastBookings">
            <MDBBtn
              style={{ height: "2.5rem", color: "grey" }}
              color="white"
              size="sm"
            >
               
              <MDBIcon far icon="clock" style={{ marginRight: "0.5rem" }} />
              past booking
            </MDBBtn>
            </a>

            <MDBBtn
              style={{ height: "2.5rem", color: "grey" }}
              color="white"
              size="sm"
            >
              <MDBIcon far icon="bell" style={{ marginRight: "0.5rem" }} />
              notifications
            </MDBBtn>
          </div>
        </BrowserRouter>
        <div style={{marginTop:'4rem'}}>
            <BookingCard status="visible"/>
        </div>
        </div>
        
     
      </div>
    );
  }
}
export default UpcomingBookings;
