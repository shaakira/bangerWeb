import React from "react";
import { MDBRow, MDBCol, MDBIcon} from "mdbreact";
import "./../Contact/Contact.css";

const FeaturesPage = () => {
  return (
      <div className="backgroundImage">
      <section className="my-5 align-cont">
        <div className="header-text">
          <h1 className="font-weight-bold mx-auto mb-4">
            Quick<span className="dot-text">.</span>
            <br />
            Support
          </h1>
          <p className="h-responsive  my-3 grey-text">
            YOU CAN FET ALL THE CONTACT INFORMATION.
          </p>
        </div>

        <MDBRow className="container-content text-center">
          <MDBCol md="4">
            <MDBIcon icon="map-marker-alt" size="2x" />
            <h6 className="font-weight-bold my-4">Visit US</h6>
            <p className="grey-text mb-md-0 mb-5">
            No. 388 Union Place,<br/>Colombo 00200
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="phone-alt" size="2x" />
            <h6 className="font-weight-bold my-4">Call Us</h6>
            <p className="grey-text mb-md-0 mb-5">
            0117 675 100<br/>0117 562 172
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="envelope-open" size="2x" />
            <h6 className="font-weight-bold my-4">Email Us</h6>
            <p className="grey-text mb-md-0 mb-5">
              Bangerandco@gmail.com<br/>bangers@gmail.com
            </p>
          </MDBCol>
        </MDBRow>
      </section>
      </div>
    
  );
};

export default FeaturesPage;
