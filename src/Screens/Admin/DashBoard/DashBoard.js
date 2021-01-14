import {
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import axios from "axios";
import React from "react";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";
import newReservation from "../../../Images/newreservation.png";
import carsAvailable from "../../../Images/carsAvailable.png";
import driver from "../../../Images/driver.png";
import available from "../../../Images/available.png";
import cost from "../../../Images/cost.png";
import rentCar from "../../../Images/rentCar.png";
import compare from "../../../Images/compare.png";
import moment from "moment";
import "../DashBoard/DashBoard.css";
class DashBoard extends React.Component {
  state = {
    bookings: [],
    dto: {
      newBookingCount: 0,
      vehicleCount: 0,
      customersCount: 0,
      availableVehicleCount: 0,
      estimation: 0,
      onRentCount: 0,
    },
  };

  async componentDidMount() {
    let token = localStorage.getItem("token");

    await axios
      .get(`http://localhost:8080/api/booking/getLatest`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ bookings: res.data });
        }
      });

    await axios
      .get(`http://localhost:8080/api/user/dashboard`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ dto: res.data });
        }
      });
    console.log(this.state.dto);
  }

  render() {
    const data = this.state.bookings;
    const val=this.state.dto;
    return (
      <div>
        <SideNav active="dashboard" />
        <TopNavigation />
        <div className="inner-di">
          <div style={{ margin: "1rem", marginTop: "3rem" }}>
            <strong style={{ marginLeft: "1rem", marginTop: "1rem" }}>
              DASHBOARD
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
              <div style={{ margin: "2rem" }}>
                <div style={{ marginLeft: "4rem", marginRight: "4rem" }}>
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBRow
                        className="admin-card"
                        style={{ borderRadius: "10px" }}
                      >
                        <MDBCol
                          md="4"
                          style={{
                            backgroundColor: "#e0e0e0",
                            textAlign: "center",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <img
                            src={newReservation}
                            alt=""
                            height="60rem"
                            style={{ marginTop: "1.5rem" }}
                          />
                        </MDBCol>

                        <MDBCol
                          md="8"
                          style={{
                            backgroundColor: "#f0f0f0",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            paddingTop: "1rem",
                          }}
                        >
                          <h1>{val.newBookingCount}</h1>
                          <p style={{ fontSize: "0.7rem" }}>
                            <strong>NEW RESERVATION</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBRow
                        className="admin-card"
                        style={{ borderRadius: "10px" }}
                      >
                        <MDBCol
                          md="4"
                          style={{
                            backgroundColor: "#e0e0e0",
                            textAlign: "center",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <img
                            src={carsAvailable}
                            alt=""
                            height="60rem"
                            style={{ marginTop: "1.5rem" }}
                          />
                        </MDBCol>

                        <MDBCol
                          md="8"
                          style={{
                            backgroundColor: "#f0f0f0",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            paddingTop: "1rem",
                          }}
                        >
                          <h1>{val.vehicleCount}</h1>
                          <p style={{ fontSize: "0.7rem" }}>
                            <strong>CARS AVAILABLE</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBRow
                        className="admin-card"
                        style={{ borderRadius: "10px" }}
                      >
                        <MDBCol
                          md="4"
                          style={{
                            backgroundColor: "#e0e0e0",
                            textAlign: "center",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <img
                            src={driver}
                            alt=""
                            height="60rem"
                            style={{ marginTop: "1.5rem" }}
                          />
                        </MDBCol>

                        <MDBCol
                          md="8"
                          style={{
                            backgroundColor: "#f0f0f0",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            paddingTop: "1rem",
                          }}
                        >
                          <h1>{val.customersCount}</h1>
                          <p style={{ fontSize: "0.7rem" }}>
                            <strong>TOTAL CUSTOMERS</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow style={{ marginTop: "1rem" }}>
                    <MDBCol md="3">
                      <MDBRow
                        className="admin-card-2"
                        style={{ borderRadius: "10px" }}
                      >
                        <MDBCol
                          md="4"
                          style={{
                            backgroundColor: "#e0e0e0",
                            textAlign: "center",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <img
                            src={available}
                            alt=""
                            height="40rem"
                            style={{ marginTop: "1.5rem" }}
                          />
                        </MDBCol>

                        <MDBCol
                          md="8"
                          style={{
                            backgroundColor: "#f0f0f0",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            paddingTop: "1rem",
                          }}
                        >
                          <h4>{val.availableVehicleCount}</h4>
                          <p style={{ fontSize: "0.6rem" }}>
                            <strong>AVAILABLE VEHICLES</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="3">
                      <MDBRow
                        className="admin-card-2"
                        style={{ borderRadius: "10px" }}
                      >
                        <MDBCol
                          md="4"
                          style={{
                            backgroundColor: "#e0e0e0",
                            textAlign: "center",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <img
                            src={cost}
                            alt=""
                            height="40rem"
                            style={{ marginTop: "1.5rem" }}
                          />
                        </MDBCol>

                        <MDBCol
                          md="8"
                          style={{
                            backgroundColor: "#f0f0f0",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            paddingTop: "1rem",
                          }}
                        >
                          <h4>£ {val.estimation}</h4>
                          <p style={{ fontSize: "0.6rem" }}>
                            <strong>ESTIMATION</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="3">
                      <MDBRow
                        className="admin-card-2"
                        style={{ borderRadius: "10px" }}
                      >
                        <MDBCol
                          md="4"
                          style={{
                            backgroundColor: "#e0e0e0",
                            textAlign: "center",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <img
                            src={rentCar}
                            alt=""
                            height="40rem"
                            style={{ marginTop: "1.5rem" }}
                          />
                        </MDBCol>

                        <MDBCol
                          md="8"
                          style={{
                            backgroundColor: "#f0f0f0",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            paddingTop: "1rem",
                          }}
                        >
                          <h4>{val.onRentCount}</h4>
                          <p style={{ fontSize: "0.6rem" }}>
                            <strong>ON RENT</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="3">
                      <MDBRow
                        className="admin-card-2"
                        style={{ borderRadius: "10px" }}
                      >
                        <MDBCol
                          md="4"
                          style={{
                            backgroundColor: "black",
                            textAlign: "center",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <img
                            src={compare}
                            alt=""
                            height="45rem"
                            style={{ marginTop: "1.5rem" }}
                          />
                        </MDBCol>

                        <MDBCol
                          md="8"
                          style={{
                            backgroundColor: "black",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            paddingTop: "1.5rem",
                            color: "white",
                          }}
                        >
                          <a href="/comparison" style={{ color: "white" }}>
                            <p style={{ fontSize: "0.8rem" }}>
                              COMPARE WITH COMPETITORS
                            </p>
                          </a>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
              <div style={{ margin: "1rem", marginTop: "3rem" }}>
                <strong style={{ marginTop: "1rem" }}>
                  LATEST RESERVATION
                </strong>

                <div style={{ backgroundColor: "white" }}>
                  <div
                    style={{
                      height: "3px",
                      backgroundColor: "#ffb700",
                      marginLeft: "-0.5rem",
                      width: "180px",
                    }}
                  />
                </div>
              </div>
              <div style={{ backgroundColor: "white", margin: "1rem" }}>
                <MDBTable
                  striped
                  bordered
                  id="myTable"
                  style={{ marginBottom: "2rem" }}
                >
                  <MDBTableHead style={{ textAlign: "center" }}>
                    <tr>
                      <th></th>
                      <th>RESERVATION INFO</th>
                      <th>PICKUP DATE / TIME</th>
                      <th>RETURN DATE/TIME</th>
                      <th>VEHICLE INFO</th>
                      <th>ESTIMATION</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody
                    style={{ textAlign: "center", marginTop: "2rem" }}
                  >
                    {data.map((booking) => (
                      <tr>
                        <td>
                          {booking.status === "confirmed" ? (
                            <MDBIcon
                              icon="clock"
                              size="2x"
                              style={{ color: "#ffb001", marginTop: "1rem" }}
                            />
                          ) : booking.status === "cancelled" ? (
                            <MDBIcon
                              icon="times-circle"
                              size="2x"
                              style={{ color: "#bd0202", marginTop: "1rem" }}
                            />
                          ) : booking.status === "returned" ? (
                            <MDBIcon
                              icon="check-circle"
                              size="2x"
                              style={{ color: "#03960f", marginTop: "1rem" }}
                            />
                          ) : booking.status === "refused" ? (
                            <MDBIcon
                              icon="ban"
                              size="2x"
                              style={{ color: "#e06c0d", marginTop: "1rem" }}
                            />
                          ) : (
                            <MDBIcon
                              icon="taxi"
                              size="2x"
                              style={{ color: "#0d50e0", marginTop: "1rem" }}
                            />
                          )}
                        </td>
                        <td>
                          <p className="grey-text" style={{ fontSize: 13 }}>
                            Booking Id :{booking.id}
                          </p>
                          <p style={{ marginTop: "-1rem" }}>
                            <strong>{booking.driver.firstName}</strong>
                          </p>
                        </td>
                        <td>
                          <p className="grey-text" style={{ fontSize: 13 }}>
                            {booking.pickUpTime}
                          </p>
                          <p style={{ marginTop: "-1rem" }}>
                            <strong>
                              {moment(booking.pickUpDate).format("yyyy-MM-DD")}
                            </strong>
                          </p>
                        </td>
                        <td>
                          <p className="grey-text" style={{ fontSize: 13 }}>
                            {booking.returnTime}
                          </p>
                          <p style={{ marginTop: "-1rem" }}>
                            <strong>
                              {moment(booking.returnDate).format("yyyy-MM-DD")}
                            </strong>
                          </p>
                        </td>{" "}
                        <td>
                          <p className="grey-text" style={{ fontSize: 13 }}>
                            {booking.vehicle.type}
                          </p>
                          <p style={{ marginTop: "-1rem" }}>
                            <strong>{booking.vehicle.name}</strong>
                          </p>
                        </td>
                        <td>
                          <p className="grey-text" style={{ fontSize: 13 }}>
                            {booking.timePeriod}
                          </p>
                          <p style={{ marginTop: "-1rem" }}>
                            <strong>£ {booking.total} Total</strong>
                          </p>
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
export default DashBoard;
