import { MDBBtn, MDBRow } from "mdbreact";
import React from "react";
import image from "../../Images/crash.png";
import "../Blacklist/Blacklist.css";

class Blacklist extends React.Component {
  render() {
    return (
      <div className="container-out">
        <img
          alt=""
          src={image}
          style={{ bottom: "0px", position: "absolute" }}
        />
        <div className="op-container">
          <div className="text-div">
            <h1>
              <strong>ACCESS DENIED</strong>
            </h1>
            <p>
              You don't have permission to access this page.
              <br />
              Contact an administrator or go to the home page
              <br />
              and browse other pages
            </p>
            <MDBRow style={{ marginLeft: "1rem" }}>
              <MDBBtn outline color="white" tag="a" href="/">GO HOME</MDBBtn>
              <MDBBtn outline color="white" tag="a" href="/contact">Contact us</MDBBtn>
            </MDBRow>
          </div>
        </div>
      </div>
    );
  }
}
export default Blacklist;
