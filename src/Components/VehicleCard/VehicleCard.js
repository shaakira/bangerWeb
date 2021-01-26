import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import img from "../../Images/car1.jpg";
import passenger from "../../Images/passenger.png";
import suitcase from "../../Images/suitcase.png";
import transmission from "../../Images/transmission.png";
import fuel from "../../Images/petrol.png";
import engine from "../../Images/engine.png";
import policy from "../../Images/policy.png";
import door from "../../Images/cardoor.png";
import ac from "../../Images/ac.png";
import "../VehicleCard/VehicleCard.css";

class VehicleCard extends React.Component {
  vehicle = this.props.data;
 

  render() {
    return (
      <div className="card-cont">
        <MDBRow>
          <MDBCol md="5">
            <div className="type-cont">{this.vehicle.type}</div>
          </MDBCol>
          <MDBCol md="7">
            <img alt="" src={'http://localhost:8080/images/'+this.vehicle.image} style={{ width: "255px" }} />
          </MDBCol>
        </MDBRow>
        <div style={{ margin: "1rem" }}>
          <h5 style={{textTransform:'capitalize'}}>{this.vehicle.name}</h5>
          <p className="grey-text" style={{ fontSize: "0.8rem" }}>
            {this.vehicle.description}
          </p>
        </div>
        <MDBRow>
          <MDBCol md="8">
            <MDBRow
              style={{
                marginLeft: "0.5rem",
                padding: "10px",
                borderTop: "0.1rem solid #f2f2f2",
              }}
            >
              <MDBCol className="fac-card">
                <img height="30rem" src={passenger} alt="" />
                <p className="text-card">{this.vehicle.passengerCount}</p>
              </MDBCol>
              <div style={{ width: "0.1rem", backgroundColor: "#f2f2f2" }} />

              <MDBCol className="fac-card">
                <img height="30rem" src={suitcase} alt="" />
                <p className="text-card">{this.vehicle.baggageCount}</p>
              </MDBCol>
              <div style={{ width: "0.1rem", backgroundColor: "#f2f2f2" }} />

              <MDBCol className="fac-card">
                <img height="30rem" src={transmission} alt="" />
                <p className="text-card">{this.vehicle.transmission}</p>
              </MDBCol>
              <div style={{ width: "0.1rem", backgroundColor: "#f2f2f2" }} />

              <MDBCol className="fac-card">
                <img height="30rem" src={fuel} alt="" />
                <p className="text-card">{this.vehicle.fuelType}</p>
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                marginLeft: "0.5rem",
                padding: "10px",
                borderTop: "0.1rem solid #f2f2f2",
              }}
            >
              <MDBCol className="fac-card">
                <img height="30rem" src={ac} alt="" />
                <p className="text-card">{this.vehicle.ac}</p>
              </MDBCol>
              <div style={{ width: "0.1rem", backgroundColor: "#f2f2f2" }} />

              <MDBCol className="fac-card">
                <img height="30rem" src={policy} alt="" />
                <p className="text-card">{this.vehicle.fuelPolicy}</p>
              </MDBCol>
              <div style={{ width: "0.1rem", backgroundColor: "#f2f2f2" }} />

              <MDBCol className="fac-card">
                <img height="30rem" src={door} alt="" />
                <p className="text-card">{this.vehicle.doorCount}</p>
              </MDBCol>
              <div style={{ width: "0.1rem", backgroundColor: "#f2f2f2" }} />

              <MDBCol className="fac-card">
                <img height="30rem" src={engine} alt="" />
                <p className="text-card">{this.vehicle.engine}</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <div className="price-card">
              <h2>£{this.vehicle.price}</h2>
              <p style={{paddingTop:'2rem'}}>PER DAY</p>
            </div>
          </MDBCol>
        </MDBRow>
      
      </div>
    );
  }
}
export default VehicleCard;
