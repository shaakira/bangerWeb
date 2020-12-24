/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { MDBBtn } from "mdbreact";
import { Accordion, Card } from "react-bootstrap";
import img from "../../Images/car1.jpg";
import passenger from "../../Images/passenger.png";
import suitcase from "../../Images/suitcase.png";
import transmission from "../../Images/transmission.png";
import fuel from "../../Images/petrol.png";
import "../FleetCard/FleetCard.css";

const FleetCard = () => {
  return (
    <Accordion defaultActiveKey="1">
      <div className="container-style">
        <section className="inner-cont">
          <div className="img-container">
            <img src={img} className="imgs-style" />
          </div>
          <div className="des-container">
            <h4 className="mb-2">Hyundai i10</h4>
            <div className="row" style={{ height: "4rem", flex: 1 }}>
              <div className="column" style={{ flex: 1, height: "4rem" }}>
                <div className="row img-row" style={{ flex: 1 }}>
                  <img height="30rem" src={passenger} />
                  <p className="text-row">1</p>
                </div>
              </div>
              <div className="column" style={{ flex: 1 }}>
                <div className="row img-row" style={{ flex: 1 }}>
                  <img height="30rem" src={suitcase} />
                  <p className="text-row">1</p>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ height: "4rem", flex: 1, marginTop: "-1rem" }}
            >
              <div className="column" style={{ flex: 1, height: "4rem" }}>
                <div className="row img-row" style={{ flex: 1 }}>
                  <img height="30rem" src={transmission} />
                  <p className="text-row">Manual</p>
                </div>
              </div>
              <div className="column" style={{ flex: 1 }}>
                <div className="row img-row" style={{ flex: 1 }}>
                  <img height="30rem" src={fuel} />
                  <p className="text-row">Petrol</p>
                </div>
              </div>
            </div>
            <p
              className="text-row "
              style={{ fontSize: "0.8rem", color: "#ffb700" }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                style={{ backgroundColor: "white", borderColor: "white" }}
              >
                VIEW VEHICLE INFO
              </Accordion.Toggle>
            </p>
          </div>
          <div className="price-container  ">
            <h3 className="h1-responsive">£40.0</h3>
            <p className="h-responsive  my-3 grey-text">
              £40.0<span>/ day</span>
            </p>
            <MDBBtn color="amber">select</MDBBtn>
          </div>
        </section>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div style={{ marginLeft: "250px" }}>
              <p>
                A small, economical car. It will be useful both for smaller and
                larger shopping, in and outside the city.
              </p>
              <div>
              <div className="row" style={{ height: "4rem", flex: 1}}>
              <div className="column" style={{ flex: 1, height: "4rem" ,fontSize:'0.8rem'}}>
                <div className="row img-row" style={{ flex: 1 }}>
                  <p className="grey-text" style={{ flex: 1 }}>ENGINE</p>
                  <p style={{ flex: 1,textAlign:'center' }}>1200</p>
                </div>
                <div style={{height:'1px',backgroundColor:'gray'}}/>
              </div>
              <div className="column" style={{ flex: 1 , height: "4rem",paddingRight:'40px',fontSize:'0.8rem'}}>
                <div className="row img-row" style={{ flex: 1 }}>
                <p className="grey-text" style={{ flex: 1 }}>AIR CONDITIONING</p>
                  <p >Yes</p>
                </div>
                <div style={{height:'1px',backgroundColor:'gray',marginRight:'-20px'}}/>
              </div>
            </div>
            <div className="row" style={{ height: "4rem", flex: 1}}>
              <div className="column" style={{ flex: 1, height: "4rem" ,fontSize:'0.8rem'}}>
                <div className="row img-row" style={{ flex: 1 }}>
                  <p className="grey-text" style={{ flex: 1 }}>DOORS NUMBER</p>
                  <p style={{ flex: 1,textAlign:'center' }}>5</p>
                </div>
                <div style={{height:'1px',backgroundColor:'gray'}}/>
              </div>
              <div className="column" style={{ flex: 1 , height: "4rem",paddingRight:'40px',fontSize:'0.8rem'}}>
                <div className="row img-row" style={{ flex: 1 }}>
                <p className="grey-text" style={{ flex: 1 }}>FUEL</p>
                  <p>Full</p>
                </div>
                <div style={{height:'1px',backgroundColor:'gray',marginRight:'-20px'}}/>
              </div>
            </div>
            
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};
export default FleetCard;
