import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import ScrollAnimation from "react-animate-on-scroll";
import image1 from "../../Images/img1.jpg";
import image2 from "../../Images/img2.jpg";

const ServicesPage = () => {
  return (
    <section className="my-5" style={{ margin: "5rem" }}>
      <ScrollAnimation animateIn="bounceInLeft">
        <p className="h-responsive  my-3 grey-text">BEST SERVICES</p>
        <h3 className="font-weight-bold mx-auto mb-4">
          Feel the best experience
          <br />
          with our rental deals
        </h3>
        <div
          style={{
            backgroundColor: "#ffb700",
            height: "0.1rem",
            width: "5rem",
            marginBottom: "5rem",
          }}
        />
      </ScrollAnimation>

      <MDBRow style={{ backgroundColor: "#e3e3e3" }}>
        <MDBCol size="4">
          <img
            className="img-fluid"
            src={image1}
            alt=""
            style={{ height: "25rem" }}
          />
        </MDBCol>
        <MDBCol size="4" className="text-name">
          <MDBRow className="mb-3" style={{ marginTop: "3rem" }}>
            <MDBCol size="1">
              <MDBIcon icon="dollar-sign" size="lg" className="amber-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h6 className="font-weight-bold mb-3">Deals for every budget</h6>
              <p className="grey-text">
                Incredible prices on vehicles and packages.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon
                icon="hand-holding-usd"
                size="lg"
                className="amber-text"
              />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h6 className="font-weight-bold mb-3">Best price guaranteed</h6>
              <p className="grey-text">
                Find a lower price? We'll refund you 100% of the difference.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="headset" size="lg" className="amber-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h6 className="font-weight-bold mb-3">Support 24/7</h6>
              <p className="grey-text">
                We ensure the best customer services for our valuable customer.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol size="4">
          <img
            className="img-fluid"
            src={image2}
            alt=""
            style={{ height: "25rem" }}
          />
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default ServicesPage;
