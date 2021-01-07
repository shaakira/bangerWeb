import React from "react";
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

import Alert from "react-bootstrap/Alert";
import "../BookingCard/BookingCard.css";
class BookingCard extends React.Component {
 
  state = {
    returnTime: "16:00",
    showDanger: false,
    modalVisibility: false,
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
  handleChange=(e)=>{
    this.setState({ returnTime: e.target.value });
  }
  render() {
    
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
                    <h1>27</h1>
                    <h6 style={{ marginTop: "-0.5rem" }}>
                      <strong>OCTOBER</strong>
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
                              Pickup Time: 8:00
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
                            <p className="grey-text">Audi</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            style={{ textAlign: "center", marginTop: "1rem" }}
                          >
                            {" "}
                            <h6>
                              <strong>STATUS</strong>
                            </h6>
                            <p
                              style={{ fontSize: "0.9rem" }}
                              className="amber-text"
                            >
                              Pending
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
                            <h5 className="grey-text">£129</h5>
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
                          <MDBCol>3 days</MDBCol>
                        </MDBRow>
                        <hr style={{ marginTop: "-0.5rem" }} />
                        <MDBRow
                          style={{ fontSize: "0.8rem", color: "#636262" }}
                        >
                          <MDBCol>
                            <p>Return date</p>
                          </MDBCol>
                          <MDBCol>2020-12-12</MDBCol>
                        </MDBRow>
                        <hr style={{ marginTop: "-0.5rem" }} />
                        <MDBRow
                          style={{ fontSize: "0.8rem", color: "#636262" }}
                        >
                          <MDBCol>
                            <p>Return time</p>
                          </MDBCol>
                          <MDBCol>8:00</MDBCol>
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
                      <div>
                        <strong>
                          <p>EXTRA OPTIONS</p>
                        </strong>
                        <div style={{ fontSize: "0.8rem", color: "#636262" }}>
                          1 X baby seat - £20
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="5" style={{ marginLeft: "2rem" }}>
                      <div>
                        <strong>
                          <p>VEHICLE DETAILS</p>
                        </strong>
                        <div style={{ fontSize: "0.8rem", color: "#636262" }}>
                          <p>Audi</p>
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
                            <MDBCol>Shaakira mubarak</MDBCol>
                          </MDBRow>
                          <hr style={{ marginTop: "-0.5rem" }} />
                          <MDBRow
                            style={{ fontSize: "0.8rem", color: "#636262" }}
                          >
                            <MDBCol>
                              <p>License No</p>
                            </MDBCol>
                            <MDBCol>47giou909</MDBCol>
                          </MDBRow>
                          <hr style={{ marginTop: "-0.5rem" }} />
                        </div>
                      </div>
                      <div style={{ marginTop: "8rem", float: "right" }}>
                        <MDBRow>
                          <MDBCol>
                            <strong>
                              <p>TOTAL</p>{" "}
                            </strong>
                          </MDBCol>
                          <MDBCol>£300</MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol style={{visibility:this.props.status==="visible"?'visible':'hidden'}}>
                      <hr />
                      <MDBRow>
                        <MDBBtn color="black" onClick={this.toggle}>
                          <MDBIcon icon="pen" style={{ marginRight: "1rem" }} />
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
                          return.(2020-12-12)
                        </div>
                      </MDBRow>
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
                    type="submit"
                    style={{ marginTop: "1.5rem" }}
                    //   onClick={this.onDeleteSubmit}
                  >
                    submit
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>

        <Alert
          variant="danger"
          onClose={() => {
            this.setState({ showDanger: false });
          }}
          dismissible
          show={this.state.showDanger}
        >
          <p>Banger & Co couldn't delete your account. Try again later.</p>
        </Alert>
      </div>
    );
  }
}
export default BookingCard;
