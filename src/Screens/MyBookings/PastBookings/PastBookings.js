import React from "react";
import axios from "axios";
import { MDBBtn, MDBIcon, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { BrowserRouter } from "react-router-dom";
import CustomerBookings from "../../CustomerBookings/CustomerBookings";
import BookingCard from "../../../Components/BookingCard/BookingCard";
class PastBookings extends React.Component {
  state = {
    bookingList: [],
    userName: localStorage.getItem("username"),
    token: localStorage.getItem("token"),
  };
  async componentDidMount() {
    console.log(this.state.token);
    await axios
      .get(
        `http://localhost:8080/api/booking/pastBooking/${this.state.userName}`,
        {
          headers: { Authorization: "Bearer " + this.state.token },
        }
      )
      .then((res) => {
        this.setState({ bookingList: res.data });
      });
  }
  render() {
    const data = this.state.bookingList;
    return (
      <div>
        <CustomerBookings />
        <div className="booking-cont">
          <BrowserRouter>
            <MDBNav className="nav-tabs " style={{ marginTop: "-4rem" }}>
              <MDBNavItem>
                <MDBNavLink active to="myBookings">
                  Past Bookings
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <div style={{ marginTop: "-3.4rem", float: "right" }}>
              <a style={{ color: "grey" }} href="/myBookings">
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
          <div style={{ marginTop: "4rem" }}>
            {data.map((booking) => (
              <BookingCard status="hidden" data={booking} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default PastBookings;
