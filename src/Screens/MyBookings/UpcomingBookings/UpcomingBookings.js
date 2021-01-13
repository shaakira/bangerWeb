import React from "react";
import axios from "axios";
import { MDBBtn, MDBIcon, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "../UpcomingBookings/UpcomingBookings.css";
import { BrowserRouter } from "react-router-dom";
import CustomerBookings from "../../CustomerBookings/CustomerBookings";
import BookingCard from "../../../Components/BookingCard/BookingCard"
class UpcomingBookings extends React.Component {
  
  state={
    bookingList:[],
    userName:localStorage.getItem("username"),
    token:localStorage.getItem("token")
  }

 async componentDidMount(){
   console.log(this.state.token)
    await axios.get(
      `http://localhost:8080/api/booking/confirmedBooking/${this.state.userName}`, {
        headers: { Authorization: "Bearer " + this.state.token },
      }
    ).then((res) => {
    this.setState({bookingList:res.data})
    });
  }
  render() {
    const data=this.state.bookingList;
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
          {data.map((booking)=>(
 <BookingCard status="visible" data={booking}/>
          ))}
           
        </div>
        </div>
        
     
      </div>
    );
  }
}
export default UpcomingBookings;
