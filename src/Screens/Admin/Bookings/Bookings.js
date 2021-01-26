/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import moment from "moment";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";

class Bookings extends React.Component {
  state = {
    bookingList: [],
  };
  loadData = async () => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/booking/getAllBookings`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ bookingList: res.data });
        }
      });
  };
  componentDidMount() {
    this.loadData();
  }
  sort() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  handleCollected = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/booking/collectVehicle/${item.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("collected");
          this.loadData();
        }
      })
      .catch((error) => console.log(error));
  };
  handleReturned = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/booking/returnedVehicle/${item.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("returned");
          this.loadData();
        }
      })
      .catch((error) => console.log(error));
  };
  handleRefused = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/booking/refusedVehicle/${item.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("refused");
          this.loadData();
        }
      })
      .catch((error) => console.log(error));
  };
  handleDelete = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/booking/deleteBooking/${item.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("deleted");
          this.loadData();
        }
      })
      .catch((error) => console.log(error));
  };
  handleCancel = async (item) => {
    
  };
  render() {
    const data = this.state.bookingList;
    return (
      <div>
        <SideNav active="booking" />
        <TopNavigation />
        <div className="inner-di">
          <div style={{ margin: "1rem", marginTop: "3rem" }}>
            <strong style={{ marginLeft: "1rem", marginTop: "1rem" }}>
              ALL BOOKINGS
            </strong>

            <div style={{ backgroundColor: "white" }}>
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#ffb700",
                  marginLeft: "0.5rem",
                  width: "120px",
                }}
              />
              <div className="search-bar" style={{ height: "60px" }}>
                <MDBRow>
                  <MDBCol md="1" style={{ marginTop: "-0.8rem" }}>
                    <MDBIcon icon="search" size="lg" />
                  </MDBCol>
                  <MDBCol
                    md="11"
                    style={{ marginTop: "-1.2rem", marginLeft: "-2rem" }}
                  >
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter booking id"
                      aria-label="Search"
                      id="myInput"
                      onKeyUp={this.sort}
                    />
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="search-bar">
                <MDBTable striped bordered id="myTable">
                  <MDBTableHead style={{ textAlign: "center" }}>
                    <tr>
                      <th>BOOKING ID</th>
                      <th>PICKUP DATE/TIME </th>
                      <th>RETURN DATE/TIME</th>
                      <th>USER ID</th>
                      <th>VEHICLE ID</th>
                      <th>EQUIPMENTS ID</th>
                      <th>BOOKING STATUS</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody style={{ textAlign: "center" }}>
                    {data.map((booking) => (
                      <tr>
                        <td>{booking.id}</td>
                        <td>
                          <p>
                            {moment(booking.pickUpDate).format("yyyy-MM-DD")}
                          </p>
                          {booking.pickUpTime}
                        </td>
                        <td>
                          <p>
                            {moment(booking.returnDate).format("yyyy-MM-DD")}
                          </p>
                          {booking.returnTime}
                        </td>
                        <td>{booking.user.id}</td>
                        <td>{booking.vehicle.id}</td>
                        <td>
                          {booking.bookingEquipments.length !== 0 ? (
                            <p>
                              {booking.bookingEquipments.map((equipment) => (
                                <p>{equipment.id}</p>
                              ))}
                            </p>
                          ) : (
                            <p>No equipments</p>
                          )}
                        </td>
                        <td>{booking.status}</td>

                        <td>{booking.status==="returned" || booking.status==="cancelled" || booking.status==="refused"?  (<div class="dropdown">
                            <button  class="dropbtn">
                              <MDBIcon
                                icon="ellipsis-v"
                                style={{
                                  marginLeft: "2rem",
                                  marginRight: "2rem",
                                  marginTop: "1rem",
                                }}
                              />
                            </button>
                            <div id="myDropdown" class="dropdown-content">
                              <a onClick={this.handleDelete.bind(this,booking)}>Delete</a>
                            </div>
                          </div>): booking.status==="collected"?(<div class="dropdown">
                            <button  class="dropbtn">
                              <MDBIcon
                                icon="ellipsis-v"
                                style={{
                                  marginLeft: "2rem",
                                  marginRight: "2rem",
                                  marginTop: "1rem",
                                }}
                              />
                            </button>
                            <div id="myDropdown" class="dropdown-content">
                              <a onClick={this.handleReturned.bind(this,booking)}>Returned</a>
                            </div>
                          </div>):(<div class="dropdown">
                            <button  class="dropbtn">
                              <MDBIcon
                                icon="ellipsis-v"
                                style={{
                                  marginLeft: "2rem",
                                  marginRight: "2rem",
                                  marginTop: "1rem",
                                }}
                              />
                            </button>
                            <div id="myDropdown" class="dropdown-content">
                              <a color="white" onClick={this.handleCollected.bind(this,booking)}>Collected</a>
                              <a color="white" onClick={this.handleRefused.bind(this,booking)}>Refused</a>
                              <a color="white" onClick={this.handleCancel.bind(this,booking)}>Cancel</a>

                            </div>
                          </div>)} 
                        
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bookings;
