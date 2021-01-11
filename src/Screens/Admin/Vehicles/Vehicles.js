import React from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { Alert, Modal } from "react-bootstrap";
import image from "../../../Images/upload.png";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";
import "../Vehicles/Vehicles.css";
import VehicleCard from "../../../Components/VehicleCard/VehicleCard";

class Vehicles extends React.Component {
  state = {
    vehicleList: [],
    vehicle: { price: 0 },
    selectedVehicle: { id: "", name: "", price: 0 },
    modal: false,
    addModal: false,
    typeVisibility: false,
  };
  loadData = async () => {
    console.log("test");
    const { data: vehicleList } = await axios.get(
      "http://localhost:8080/api/v1/vehicle/getVehicles"
    );
    this.setState({ vehicleList });
    console.log(this.state.vehicleList);
  };
  async componentDidMount() {
    this.loadData();
  }
  handleDelete = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/v1/vehicle/deleteVehicle/${item.id}`, {
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
  openModal = (item) => {
    this.setState({
      selectedVehicle: { id: item.id, name: item.name, price: item.price },
      modal: true,
    });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleChange = (e) => {
    const vehicle = { ...this.state.vehicle };
    vehicle[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ vehicle });
  };
  handleUpdatePrice = async () => {
    let token = localStorage.getItem("token");
    await axios
      .post(
        `http://localhost:8080/api/v1/vehicle/updatePrice/${this.state.selectedVehicle.id}`,
        this.state.vehicle,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      });
  };
  render() {
    let data = this.state.vehicleList;
    const disabled =
      this.state.vehicle.price === "" || this.state.vehicle.price <= 0;
    return (
      <div style={{ backgroundColor: "white" }}>
        <SideNav active="vehicles" />
        <TopNavigation />
        <div className="inner-di">
          <div style={{ margin: "1rem", marginTop: "3rem" }}>
            <strong style={{ marginLeft: "1rem", marginTop: "1rem" }}>
              VEHICLES
            </strong>

            <div style={{ backgroundColor: "#f2f2f2" }}>
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#ffb700",
                  marginLeft: "0.5rem",
                  width: "90px",
                }}
              />
              <MDBRow>
                <MDBCol md="8"></MDBCol>
                <MDBCol md="4">
                  <MDBBtn
                    color="black"
                    onClick={() => this.setState({ addModal: true })}
                  >
                    <MDBIcon icon="plus" style={{ marginRight: "1rem" }} />
                    add equipment
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <div class="grid-container">
                {data.map((vehicle) => (
                  <div>
                    <VehicleCard data={vehicle} />
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "60px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: "-10px",
                        marginBottom: "10px",
                      }}
                    >
                      <MDBRow style={{ float: "right", marginRight: "0.8rem" }}>
                        <MDBBtn
                          color="yellow"
                          outline
                          onClick={this.openModal.bind(this, vehicle)}
                        >
                          update price
                        </MDBBtn>
                        <MDBBtn
                          color="red"
                          outline
                          onClick={this.handleDelete.bind(this, vehicle)}
                        >
                          delete
                        </MDBBtn>
                      </MDBRow>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.modal}
          centered
          onHide={() => this.setState({ addModal: false })}
        >
          <Modal.Body>
            <div>
              <div className="header-box" style={{ width: "200px" }}>
                <div>
                  <h4>
                    <strong>UPDATE PRICE</strong>
                  </h4>
                </div>
              </div>
              <div className="btn-cont">
                <MDBBtn size="sm" color="white" onClick={this.toggle}>
                  CANCEL
                </MDBBtn>
                <MDBBtn
                  size="sm"
                  color="black"
                  onClick={this.handleUpdatePrice}
                  disabled={disabled}
                >
                  update
                </MDBBtn>
              </div>
            </div>
            <div
              style={{
                margin: "2rem",
                marginTop: "3rem",
                marginBottom: "3rem",
              }}
            >
              <MDBRow>
                <h3 style={{ textTransform: "capitalize" }}>
                  {this.state.selectedVehicle.name} - £
                  {this.state.selectedVehicle.price}
                </h3>
                <h5 style={{ marginLeft: "0.5rem", marginTop: "0.2rem" }}>
                  per day
                </h5>
              </MDBRow>
              <h6
                className="mb-2 grey-text"
                style={{
                  fontSize: 12,
                  marginLeft: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                Update the price per day
              </h6>
              <MDBInput
                style={{
                  color: "black",
                  marginTop: "-1rem",
                  marginBottom: "-1rem",
                  fontSize: "0.9rem",
                }}
                type="number"
                id="price"
                name="price"
                value={this.state.vehicle.price}
                onChange={this.handleChange}
                outline
                required
              />
              <p
                style={{
                  color: "#a60505",
                  fontSize: "0.9rem",
                }}
              >
                * New price of {this.state.selectedVehicle.name} £
                {this.state.vehicle.price} per day. This can be updated whenever
                you want. Click Submit to update the new price.
              </p>
            </div>
          </Modal.Body>
        </Modal>
        <MDBModal isOpen={this.state.addModal} size="lg">
          <MDBModalHeader
            toggle={() => this.setState({ addModal: false })}
            style={{ backgroundColor: "#ffb700" }}
          >
            <strong>New Vehicle</strong>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol md="5" style={{ margin: "1rem" }}>
                <h6
                  className="mb-2 grey-text"
                  style={{ fontSize: 12, marginLeft: "0.5rem" }}
                >
                  VEHICLE NAME
                </h6>
                <MDBInput
                  style={{
                    color: "black",
                    marginTop: "-1rem",
                    marginBottom: "1rem",
                    fontSize: "0.9rem",
                  }}
                  type="text"
                  id="name"
                  name="name"
                  outline
                  required
                />
                <h6
                  className="mb-2 grey-text"
                  style={{ fontSize: 12, marginLeft: "0.5rem" }}
                >
                  VEHICLE DESCRIPTION
                </h6>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  style={{
                    color: "black",
                    marginBottom: "1rem",
                    fontSize: "0.9rem",
                  }}
                />
                <h6
                  className="mb-2 grey-text"
                  style={{ fontSize: 12, marginLeft: "0.5rem" }}
                >
                  VEHICLE TYPE
                </h6>
                <MDBRow>
                  <MDBCol md="7">
                    {this.state.typeVisibility === false ? (
                      <select
                        name="type"
                        className="browser-default custom-select"
                        style={{
                          color: "black",
                          marginBottom: "1rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <option value="town cars">Town Cars</option>
                        <option value="family hatchback">
                          Family Hatchback
                        </option>
                        <option value="family saloon">Family Saloon</option>
                        <option value="family estate">Family Estate</option>
                        <option value="medium vans">Medium Vans</option>
                      </select>
                    ) : (
                      <MDBInput
                        style={{
                          color: "black",
                          marginTop: "-1rem",
                          marginBottom: "1rem",
                          fontSize: "0.9rem",
                        }}
                        type="text"
                        id="name"
                        name="type"
                        outline
                        required
                      />
                    )}
                  </MDBCol>
                  <MDBCol
                    md="5"
                    style={{
                      marginTop:
                        this.state.typeVisibility === false ? "-5px" : "2px",
                    }}
                  >
                    {this.state.typeVisibility === false ? (
                      <MDBBtn
                        size="sm"
                        color="black"
                        onClick={() => this.setState({ typeVisibility: true })}
                      >
                        <MDBIcon icon="plus" style={{ paddingRight: "10px" }} />
                        new
                      </MDBBtn>
                    ) : (
                      <MDBBtn
                        size="sm"
                        color="black"
                        onClick={() => this.setState({ typeVisibility: false })}
                      >
                        cancel
                      </MDBBtn>
                    )}
                  </MDBCol>
                </MDBRow>
                <h6
                  className="mb-2 grey-text"
                  style={{
                    fontSize: 12,
                    marginLeft: "0.5rem",
                    marginTop: "2rem",
                  }}
                >
                  PRICE PER DAY
                </h6>
                <MDBRow>
                  <MDBCol md="1" style={{ marginTop: "0.8rem" }}>
                    £
                  </MDBCol>
                  <MDBCol md="10">
                    <MDBInput
                      style={{
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "-1rem",
                        fontSize: "0.9rem",
                      }}
                      type="text"
                      id="count"
                      name="count"
                      outline
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <h6
                  className="mb-2 grey-text"
                  style={{
                    fontSize: 12,
                    marginLeft: "0.5rem",
                    marginTop: "2rem",
                  }}
                >
                  ADD IMAGE
                </h6>
                <div class="img-cont">
                  <div className="inner-img-cont">
                    <img alt="" src={image} style={{ height: "50px" }} />
                    <p className="mt-2 grey-text">upload an image</p>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                      style={{
                        color: "black",
                        fontSize: "0.9rem",
                      }}
                    >
                      Choose file
                    </label>
                  </div>
                </div>
              </MDBCol>
              <div style={{ width: "1px", backgroundColor: "#e6e6e4" }} />

              <MDBCol md="6" style={{ margin: "1rem" }}>
                <MDBRow>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      PASSENGER COUNT
                    </h6>
                    <MDBInput
                      style={{
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "1rem",
                        fontSize: "0.9rem",
                      }}
                      type="number"
                      id="passengerCount"
                      name="passengerCount"
                      outline
                      required
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      BAGGAGE COUNT
                    </h6>
                    <MDBInput
                      style={{
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "1rem",
                        fontSize: "0.9rem",
                      }}
                      type="number"
                      id="baggageCount"
                      name="baggageCount"
                      outline
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      ENGINE CAPACITY
                    </h6>
                    <MDBInput
                      style={{
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "1rem",
                        fontSize: "0.9rem",
                      }}
                      type="number"
                      id="engine"
                      name="engine"
                      outline
                      required
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      DOOR COUNT 
                    </h6>
                    <MDBInput
                      style={{
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "1rem",
                        fontSize: "0.9rem",
                      }}
                      type="number"
                      id="doorCount"
                      name="doorCount"
                      outline
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      TRANSMISSION
                    </h6>
                    <select
                        name="transmission"
                        className="browser-default custom-select"
                        style={{
                          color: "black",
                          marginBottom: "1rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <option value="auto">Auto</option>
                        <option value="manual">
                          Manual
                        </option>
                        <option value="CVT">CVT</option>
                        
                      </select>
                  </MDBCol>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      AC
                    </h6>
                    <select
                        name="ac"
                        className="browser-default custom-select"
                        style={{
                          color: "black",
                          marginBottom: "1.5rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <option value="yes">Yes</option>
                        <option value="No">
                          No
                        </option>
                        
                      </select>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      FUEL TYPE
                    </h6>
                    <select
                        name="fuelType"
                        className="browser-default custom-select"
                        style={{
                          color: "black",
                          marginBottom: "1.5rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <option value="petrol">Petrol</option>
                        <option value="diesel">
                          Diesel
                        </option>
                        
                      </select>
                  </MDBCol>
                  <MDBCol md="6">
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      BAGGAGE COUNT
                    </h6>
                    <select
                        name="fuelPolicy"
                        className="browser-default custom-select"
                        style={{
                          color: "black",
                          marginBottom: "1.5rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <option value="full">Full</option>
                        <option value="n/a">
                          N/A
                        </option>
                        
                      </select>
                  </MDBCol>
                </MDBRow>
                <div
                    style={{
                      float: "right",
                      marginTop: "20rem",
                    }}
                  >
                    <MDBBtn color="white" onClick={() => this.setState({ addModal: false })}>cancel</MDBBtn>
                    <MDBBtn color="black">submit</MDBBtn>
                  </div>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
      
        </MDBModal>
      </div>
    );
  }
}
export default Vehicles;
