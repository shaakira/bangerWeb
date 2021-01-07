import React from "react";
import { MDBBtn, MDBIcon, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { BrowserRouter } from "react-router-dom";
import CustomerBookings from "../../CustomerBookings/CustomerBookings";
import BookingCard from "../../../Components/BookingCard/BookingCard"
class PastBookings extends React.Component {
  render() {
    return (
      <div>
        <CustomerBookings />
        <div className="booking-cont">
        <BrowserRouter>
          <MDBNav className="nav-tabs " style={{ marginTop: "-4rem"}} >
            <MDBNavItem>
              <MDBNavLink active to="myBookings">
                Past Bookings
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <div style={{ marginTop: "-3.4rem", float: "right" }}>
              <a style={{color:'grey'}} href="/myBookings">
              <MDBBtn
              style={{ height: "2.5rem", color: "grey" }}
              color="white"
              size="sm"
            >
              <MDBIcon far icon="clock" style={{ marginRight: "0.5rem" }} />
              upcoming booking
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
            <BookingCard status="hidden"/>
        </div>
        </div>
        
     
      </div>
    );
  }
}
export default PastBookings;
