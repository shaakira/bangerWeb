import React from "react";
import axios from "axios";
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";
import { Accordion, Card } from "react-bootstrap";
import moment from "moment";
import "../BookingCard/BookingCard.css";
class BookingCard extends React.Component {
  booking = this.props.data;
  state = {
    returnTime: "16:00",
    showDanger: false,
    modalVisibility: false,
    returnDate: this.booking.returnDate,
    pickUpDate: this.booking.pickUpDate,
    booking: { returnTime: "16:00" },
    cancelBooking:{note:""},
    cancelModal:false
  };
  toggle = () => {
    const { modalVisibility } = this.state;
    this.setState({ deleteText: "" });
    this.setState({
      modalVisibility: !modalVisibility,
    });
    if (this.state.showDanger) {
      this.setState({ showDanger: false });
    }
  };
  handleChange = (e) => {
    this.setState({
      returnTime: e.target.value,
      booking: { returnTime: e.target.value },
    });
  };
  handleExtend = async () => {
    let token = localStorage.getItem("token");
    let username=localStorage.getItem("username");
    await axios
      .post(
        `http://localhost:8080/api/booking/extendBooking/${this.booking.id}/${username}`,
        this.state.booking,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({ modalVisibility: false });
          alert("Your booking extended successfully");
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  handleCancel = async () => {
    let token = localStorage.getItem("token");
    let username=localStorage.getItem("username");
    await axios
      .post(
        `http://localhost:8080/api/booking/cancelBooking/${this.booking.id}/${username}`,
        this.state.cancelBooking,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({ cancelModal: false });
          alert("Booking cancelled successfully");
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  handleNoteChange=(e)=>{
    this.setState({cancelBooking: {note:e.target.value}})
  }
  render() {
    const disabled =
      this.state.returnTime > "16:00" ||
      this.state.returnTime < this.booking.returnTime;
    return (
      <div>
        <div style={{ margin: "3rem" }}>
          <Accordion defaultActiveKey="1">
            <Accordion.Toggle
              eventKey="0"
              as={Card.Header}
              style={{ backgroundColor: "white", borderColor: "white" }}
            >
              <section style={{ backgroundColor: "white" }}>
                <MDBRow>
                  <div className="dot-round">
                    <h1>{moment(this.state.pickUpDate).format("DD")}</h1>
                    <h6
                      style={{
                        marginTop: "-0.5rem",
                        textTransform: "uppercase",
                      }}
                    >
                      <strong>
                        {moment(this.state.pickUpDate).format("MMMM")}
                      </strong>
                    </h6>
                  </div>

                  <MDBCol>
                    <div
                      style={{
                        height: "120px",
                        borderRadius: "5px",
                        marginLeft: "-4rem",
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <MDBContainer style={{ marginLeft: "2.5rem" }}>
                        <MDBRow style={{ height: "120px", padding: "1rem" }}>
                          <MDBCol md="6">
                            <h4>
                              <strong>Monday</strong>
                            </h4>
                            <p
                              style={{ fontSize: "0.8rem" }}
                              className="grey-text"
                            >
                              Pickup Time: {this.booking.pickUpTime}
                            </p>
                            <p
                              style={{
                                fontSize: "0.8rem",
                                marginTop: "-0.8rem",
                              }}
                              className="grey-text"
                            >
                              {" "}
                              Bangers & Co, No. 388 Union Place, Colombo 00200
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            style={{ textAlign: "center", marginTop: "1rem" }}
                          >
                            {" "}
                            <h6>
                              <strong>VEHICLE</strong>
                            </h6>
                            <p
                              className="grey-text"
                              style={{ textTransform: "capitalize" }}
                            >
                              {this.booking.vehicle.name}
                            </p>
                          </MDBCol>
                          <MDBCol
                            md={this.props.status === "visible" ? "2" : "0"}
                            style={{
                              textAlign: "center",
                              marginTop: "1rem",
                              visibility:
                                this.props.status === "visible"
                                  ? "visible"
                                  : "hidden",
                            }}
                          >
                            {" "}
                            <h6>
                              <strong>STATUS</strong>
                            </h6>
                            <p
                              style={{
                                fontSize: "0.9rem",
                                textTransform: "capitalize",
                              }}
                              className="amber-text"
                            >
                              {this.booking.status}
                            </p>
                          </MDBCol>

                          <MDBCol
                            md="2"
                            style={{ textAlign: "center", marginTop: "1rem" }}
                          >
                            {" "}
                            <h6>
                              <strong>TOTAL</strong>
                            </h6>
                            <h5 className="grey-text">£{this.booking.total}</h5>
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                    </div>
                  </MDBCol>
                </MDBRow>
              </section>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div className="bottom-cont">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="5">
                      <div>
                        <strong>
                          <p>BOOKING DETAILS</p>
                        </strong>
                        <MDBRow
                          style={{ fontSize: "0.8rem", color: "#636262" }}
                        >
                          <MDBCol>
                            <p>Time period</p>
                          </MDBCol>
                          <MDBCol>{this.booking.timePeriod}</MDBCol>
                        </MDBRow>
                        <hr style={{ marginTop: "-0.5rem" }} />
                        <MDBRow
                          style={{ fontSize: "0.8rem", color: "#636262" }}
                        >
                          <MDBCol>
                            <p>Return date</p>
                          </MDBCol>
                          <MDBCol>
                            {moment(this.state.returnDate).format("yyyy-MM-DD")}
                          </MDBCol>
                        </MDBRow>
                        <hr style={{ marginTop: "-0.5rem" }} />
                        <MDBRow
                          style={{ fontSize: "0.8rem", color: "#636262" }}
                        >
                          <MDBCol>
                            <p>Return time</p>
                          </MDBCol>
                          <MDBCol>{this.booking.returnTime}</MDBCol>
                        </MDBRow>
                        <hr style={{ marginTop: "-0.5rem" }} />
                        <MDBRow
                          style={{ fontSize: "0.8rem", color: "#636262" }}
                        >
                          <MDBCol>
                            <p>Drop location</p>
                          </MDBCol>
                          <MDBCol>
                            {" "}
                            Bangers & Co, No. 388 Union Place, Colombo 00200
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </div>
                      {this.booking.bookingEquipments.length === 0 ? (
                        <div></div>
                      ) : (
                        <div>
                          <strong>
                            <p>EXTRA OPTIONS</p>
                          </strong>
                          <div style={{ fontSize: "0.8rem", color: "#636262" }}>
                            {this.booking.bookingEquipments.map((equipment) => (
                              <p>
                                {equipment.count} X {equipment.name} - £{" "}
                                {equipment.count * equipment.price}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </MDBCol>
                    <MDBCol md="5" style={{ marginLeft: "2rem" }}>
                      <div>
                        <strong>
                          <p>VEHICLE DETAILS</p>
                        </strong>
                        <div style={{ fontSize: "0.8rem", color: "#636262" }}>
                          <p>{this.booking.vehicle.name}</p>
                        </div>
                      </div>
                      <div>
                        <strong>
                          <p>DRIVER DETAILS</p>
                        </strong>
                        <div style={{ fontSize: "0.8rem", color: "#636262" }}>
                          <MDBRow
                            style={{ fontSize: "0.8rem", color: "#636262" }}
                          >
                            <MDBCol>
                              <p>Driver name</p>
                            </MDBCol>
                            <MDBCol>{this.booking.driver.firstName}</MDBCol>
                          </MDBRow>
                          <hr style={{ marginTop: "-0.5rem" }} />
                          <MDBRow
                            style={{ fontSize: "0.8rem", color: "#636262" }}
                          >
                            <MDBCol>
                              <p>License No</p>
                            </MDBCol>
                            <MDBCol>{this.booking.driver.licenseNo}</MDBCol>
                          </MDBRow>
                          <hr style={{ marginTop: "-0.5rem" }} />
                        </div>
                      </div>
                      <div style={{ marginTop: "8rem", float: "right" }}>
                        <MDBRow>
                          <MDBCol>
                            <strong>
                              <p>TOTAL</p>
                            </strong>
                          </MDBCol>
                          <MDBCol>£ {this.booking.total}</MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol
                      style={{
                        visibility:
                          this.props.status === "visible"
                            ? "visible"
                            : "hidden",
                      }}
                    >
                      <hr />
                      {this.booking.returnTime < this.state.returnTime ? (
                        <MDBRow>
                          <MDBCol md="4">
                            <MDBBtn color="red" onClick={()=>this.setState({cancelModal:true})}>cancel booking</MDBBtn>
                          </MDBCol>
                          <MDBCol md="8">
                            <MDBBtn color="black" onClick={this.toggle}>
                              <MDBIcon
                                icon="pen"
                                style={{ marginRight: "1rem" }}
                              />
                              Extend booking
                            </MDBBtn>
                            <div
                              style={{
                                color: "#c70404",
                                fontSize: "0.8rem",
                                marginLeft: "1rem",
                                marginTop: "1rem",
                              }}
                            >
                              <MDBIcon
                                far
                                icon="question-circle"
                                style={{ marginRight: "0.2rem" }}
                              />
                              Booking can be extended up to 4pm on the day of
                              return.(
                              {moment(this.state.returnDate).format(
                                "yyyy-MM-DD"
                              )}
                              ).If there is no Booking for this vehicle
                            </div>
                          </MDBCol>
                        </MDBRow>
                      ) : (
                        <MDBRow>
                          <MDBBtn color="red" onClick={()=>this.setState({cancelModal:true})}>cancel booking</MDBBtn>
                        </MDBRow>
                      )}
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
        <MDBContainer>
          <MDBModal
            isOpen={this.state.modalVisibility}
            // isOpen={true}
            toggle={this.toggle}
            centered
          >
            <MDBModalHeader toggle={this.toggle}>Extend Booking</MDBModalHeader>
            <MDBModalBody>
              <h6 className="mb-2" style={{ fontSize: 14 }}>
                Booking can be extended up to 4pm on the day of
                return.(2020-12-12)
              </h6>
              <MDBRow style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <MDBCol md="8">
                  <label style={{ fontSize: 12 }} className="grey-text">
                    Select your returning time
                  </label>
                  <input
                    type="time"
                    id="defaultFormContactNameEx"
                    className="form-control"
                    name="deleteText"
                    required
                    value={this.state.returnTime}
                    min="09:00"
                    max="16:00"
                    onChange={this.handleChange}
                  />
                  <span class="validity"></span>
                </MDBCol>
                <MDBCol>
                  <MDBBtn
                    color="black"
                    style={{ marginTop: "1.5rem" }}
                    onClick={this.handleExtend}
                    disabled={disabled}
                  >
                    submit
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
        <MDBContainer>
          <MDBModal isOpen={this.state.cancelModal} toggle={()=>this.setState({cancelModal:false})} centered>
            <MDBModalHeader toggle={()=>this.setState({cancelModal:false})}>
              Cancel Your Booking
            </MDBModalHeader>
            <MDBModalBody>
              <div style={{ backgroundColor: "#d7edd5", padding: "1rem" }}>
                <h6 className="mb-2" style={{ fontSize: 13 }}>
                  <MDBIcon icon="exclamation" style={{ marginRight: "1rem" }} />
                  This following information is only for our records and will
                  not preventing youfrom cancelling order
                </h6>
              </div>

              <MDBRow style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <MDBCol md="8" style={{ margin: "1rem" }}>
                  <label style={{ fontSize: 13 }} className="grey-text">
                    Reason for cancellation
                  </label>
                  <br />
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="note"
                    value={this.state.cancelBooking.note}
                    onChange={this.handleNoteChange}
                  />
                </MDBCol>
              </MDBRow>
              <div style={{ float: "right" }}>
                <MDBRow>
                  <MDBBtn
                    color="white"
                    style={{ marginTop: "1.5rem" }}
                    onClick={()=>this.setState({cancelModal:false})}
                    disabled={disabled}
                  >
                    Never mind
                  </MDBBtn>
                  <MDBBtn
                    color="red"
                    style={{ marginTop: "1.5rem" }}
                    onClick={this.handleCancel}
                    disabled={this.state.cancelBooking.note===""}
                  >
                    cancel booking
                  </MDBBtn>
                </MDBRow>
              </div>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
export default BookingCard;
