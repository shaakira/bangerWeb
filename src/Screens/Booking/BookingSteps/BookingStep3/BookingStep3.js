import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import "../BookingStep3/BookingStep3.css";
import Booking from "../../Booking";
import { Alert } from "react-bootstrap";
import axios from "axios";

class BookingStep3 extends React.Component {
  state = {
    bookingDetails: this.props.location.state.bookingDetails,
    equipmentAmount: 0,
    Total: 0,
    driver: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      licenseNo: "",
      nic: "",
      age: this.props.location.state.bookingDetails.bookingD.age,
    },
    bookingSummary: {
      bookingDetails: "",
      driver: "",
      total: 0,
      equipmentPrice: 0,
    },
    booking: {
      returnDate: "",
      returnTime: "",
      age: "",
      pickUpDate: "",
      pickUpTime: "08:00",
      vehicle: "",
    },
    errorText: "",
    alertVisibility: false,
    modal: false
  };
  componentDidMount() {
    let price = 0;

    if (this.state.bookingDetails.equipments.length !== 0) {
      for (let i = 0; i < this.state.bookingDetails.equipments.length; i++) {
        price =
          price +
          this.state.bookingDetails.equipments[i].count *
            this.state.bookingDetails.equipments[i].price;
      }
      console.log(this.state.bookingDetails);
      this.setState({ equipmentAmount: price });
      const total = price + this.state.bookingDetails.total;
      this.setState({ Total: total });
    }
    const detail = this.state.bookingDetails.bookingD;
    this.setState({
      booking: {
        returnDate: detail.returnDate,
        returnTime: detail.returnTime,
        age: detail.age,
        pickUpDate: detail.pickUpDate,
        pickUpTime: detail.pickUpTime,
        vehicle: detail.vehicle,
      },
    });
    console.log(this.state.bookingDetails);
  }
  handleChange = (e) => {
    const driver = { ...this.state.driver };
    driver[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ driver });
    this.setState({
      bookingSummary: {
        bookingDetails: this.state.bookingDetails,
        driver: this.state.driver,
        total: this.state.Total,
        equipmentPrice: this.state.equipmentAmount,
      },
    });
  };
  onBtnClick = async () => {
    console.log(this.state.driver);
    const driver = this.state.driver;
    var token = localStorage.getItem("token");
    var username = localStorage.getItem("username");
    console.log(username);
    await axios
      .post(
        `http://localhost:8080/api/booking/validateDriver/${username}`,
        driver,
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          if(res.data==="documents"){
            this.setState({modal:true})
          }
        else{
          this.props.history.push({
            pathname: "/booking4",
            state: { bookingSummary: this.state.bookingSummary },
          });
        }
        }
      })
      .catch((error) => {
        this.setState({
          alertVisibility: true,
          errorText: error.response.data.message,
        });
      });
  };
  submitBooking=()=>{
    this.props.history.push({
      pathname: "/booking4",
      state: { bookingSummary: this.state.bookingSummary },
    });
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const details = this.state.bookingDetails;
    const driver = this.state.driver;
    const enabled =
      driver.firstName !== "" &&
      driver.lastName !== "" &&
      driver.email !== "" &&
      driver.phoneNumber !== "" &&
      driver.licenseNo !== "" &&
      driver.nic !== "";
    return (
      <div>
        <Booking step={2} />
        <div style={{ marginTop: "4rem" }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="3">
                <div className="left-container">
                  <h5 style={{ fontWeight: "bold", color: "gray" }}>
                    Booking details
                  </h5>
                  <p className="grey-text" style={{ marginTop: "1rem" }}>
                    PICKUP LOCATION
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>
                    Bangers & Co
                    <br />
                    No. 388 Union Place
                    <br />
                    Colombo 00200
                    <br />
                    Sri Lanka
                  </p>
                  <hr />
                  <p className="grey-text" style={{ marginTop: "1rem" }}>
                    PICKUP DATE, TIME
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>
                    {" "}
                    {details.bookingD.pickUpDate}, {details.bookingD.pickUpTime}
                  </p>
                  <hr />
                  <p className="grey-text" style={{ marginTop: "1rem" }}>
                    RETURN LOCATION
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>
                    Bangers & Co
                    <br />
                    No. 388 Union Place
                    <br />
                    Colombo 00200
                    <br />
                    Sri Lanka
                  </p>
                  <hr />
                  <p className="grey-text" style={{ marginTop: "1rem" }}>
                    RETURN DATE, TIME
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>
                    {details.bookingD.returnDate}, {details.bookingD.returnTime}
                  </p>
                  <hr />
                  <p className="grey-text" style={{ marginTop: "1rem" }}>
                    RENTAL PERIOD
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>{details.timePeriod}</p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div className="row" style={{ marginLeft: "0.2rem" }}>
                    <h6>Selected vehicle</h6>
                    <p style={{ marginLeft: "5rem" }}>
                      £ {this.state.bookingDetails.total}
                    </p>
                  </div>
                  <div
                    className="row"
                    style={{ marginLeft: "0.2rem", marginTop: "-1rem" }}
                  >
                    <h6>Extra equipments</h6>
                    <p style={{ marginLeft: "4.3rem" }}>
                      £ {this.state.equipmentAmount}
                    </p>
                  </div>
                  <hr color="black" />
                  <div className="row" style={{ marginLeft: "0.2rem" }}>
                    <p>Total</p>
                    <p style={{ marginLeft: "10rem" }}>£ {this.state.Total}</p>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                  <div className="header-container" style={{ width: "180px" }}>
                    <p>driver details</p>
                  </div>
                  <div className="cont">
                    <MDBRow>
                      <MDBCol
                        md="6"
                        style={{ padding: "1rem", marginLeft: "1rem" }}
                      >
                        <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                          FIRST NAME *
                        </h6>
                        <MDBInput
                          borderColor="red"
                          style={{
                            borderColor: "white",
                            color: "black",
                            marginTop: "-1rem",
                            marginBottom: "-1rem",
                          }}
                          type="text"
                          name="firstName"
                          value={this.state.driver.firstName}
                          onChange={this.handleChange}
                        />
                      </MDBCol>
                      <div
                        style={{ width: "1px", backgroundColor: "#E6E4E4" }}
                      />
                      <MDBCol md="5" style={{ padding: "1rem" }}>
                        <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                          LAST NAME *
                        </h6>
                        <MDBInput
                          borderColor="red"
                          style={{
                            borderColor: "white",
                            color: "black",
                            marginTop: "-1rem",
                            marginBottom: "-1rem",
                          }}
                          type="text"
                          name="lastName"
                          value={this.state.driver.lastName}
                          onChange={this.handleChange}
                        />
                      </MDBCol>
                    </MDBRow>
                    <div className="divider" />
                    <MDBRow>
                      <MDBCol
                        md="6"
                        style={{ padding: "1rem", marginLeft: "1rem" }}
                      >
                        <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                          EMAIL *
                        </h6>
                        <MDBInput
                          borderColor="red"
                          style={{
                            borderColor: "white",
                            color: "black",
                            marginTop: "-1rem",
                            marginBottom: "-1rem",
                          }}
                          type="email"
                          name="email"
                          value={this.state.driver.email}
                          onChange={this.handleChange}
                        />
                      </MDBCol>
                      <div
                        style={{ width: "1px", backgroundColor: "#E6E4E4" }}
                      />
                      <MDBCol md="5" style={{ padding: "1rem" }}>
                        <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                          PHONE NUMBER *
                        </h6>
                        <MDBInput
                          borderColor="red"
                          style={{
                            borderColor: "white",
                            color: "black",
                            marginTop: "-1rem",
                            marginBottom: "-1rem",
                          }}
                          type="text"
                          name="phoneNumber"
                          value={this.state.driver.phoneNumber}
                          onChange={this.handleChange}
                        />
                      </MDBCol>
                    </MDBRow>
                    <div className="divider" />
                    <MDBRow>
                      <MDBCol
                        md="6"
                        style={{ padding: "1rem", marginLeft: "1rem" }}
                      >
                        <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                          DRIVING LICENSE NUMBER*
                        </h6>
                        <MDBInput
                          borderColor="red"
                          style={{
                            borderColor: "white",
                            color: "black",
                            marginTop: "-1rem",
                            marginBottom: "-1rem",
                          }}
                          type="text"
                          name="licenseNo"
                          value={this.state.driver.licenseNo}
                          onChange={this.handleChange}
                        />
                      </MDBCol>
                      <div
                        style={{ width: "1px", backgroundColor: "#E6E4E4" }}
                      />
                      <MDBCol md="5" style={{ padding: "1rem" }}>
                        <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                          NIC *
                        </h6>
                        <MDBInput
                          borderColor="red"
                          style={{
                            borderColor: "white",
                            color: "black",
                            marginTop: "-1rem",
                            marginBottom: "-1rem",
                          }}
                          type="text"
                          name="nic"
                          value={this.state.driver.nic}
                          onChange={this.handleChange}
                        />
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <Alert
                    variant="danger"
                    dismissible
                    show={this.state.alertVisibility}
                    onClose={() => this.setState({ alertVisibility: false })}
                    style={{ marginTop: "1rem" }}
                  >
                    <p>{this.state.errorText}</p>
                  </Alert>
                </div>
              </MDBCol>
            </MDBRow>

            <div
              className="row"
              style={{ marginTop: "4rem", marginBottom: "4rem" }}
            >
              <div style={{ flex: 1 }}></div>

              <div style={{ float: "right" }}>
                <MDBBtn
                  variant="contained"
                  color="amber"
                  disabled={!enabled}
                  onClick={this.onBtnClick}
                >
                  booking summary
                  <MDBIcon
                    icon="chevron-right"
                    style={{ marginLeft: "0.5rem" }}
                  />
                </MDBBtn>
              </div>
            </div>
          </MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
            <MDBModalHeader toggle={this.toggle}>Are you sure?</MDBModalHeader>
            <MDBModalBody>
              <p>
                <MDBIcon
                  icon="exclamation-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Are you sure that the license you have have submitted in the
                profile screen is the driving license of the entered driver's
                driving license? and the submitted bills are no older than 3
                months
              </p>
              <p style={{color:'red',fontSize:'0.9rem'}}> * If not your booking will be cancelled by Bangers and Co</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="white" onClick={this.toggle}>
                Cancel
              </MDBBtn>
              <MDBBtn color="yellow" onClick={this.submitBooking}>yes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </div>
    );
  }
}
export default BookingStep3;
