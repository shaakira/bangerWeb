/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { MDBBtn } from "mdbreact";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./../AboutUs/AboutUs.css";
import image from "../../Images/retro.png";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "black", marginLeft: "4rem" }}>
      <section className="my-5 triangle-right">
        <ScrollAnimation animateIn="bounceInLeft">
          <div
            style={{
              position: "absolute",
              marginLeft: "-45rem",
              marginTop: "-8rem",
            }}
          >
            <p className="h-responsive  my-3 grey-text">ABOUT US</p>
            <h4 className="font-weight-bold mx-auto mb-4">
              The best choice; <br />
              make your trip comfortable
            </h4>
            <div
              style={{
                backgroundColor: "#ffb700",
                height: "0.1rem",
                width: "5rem",
                marginBottom: "1rem",
              }}
            />
            <MDBBtn outline color="black">
              <a href="/aboutUs" style={{ color: "black" }}>
                learn more
              </a>
            </MDBBtn>
          </div>
        </ScrollAnimation>

        <img src={image} className="image" />
      </section>
    </div>
  );
};

export default AboutUs;
