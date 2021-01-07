import React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

import NavBar from "../../Components/NavBar/NavBar";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import car from "../../Images/book_car.png";
import "../CustomerBookings/CustomerBookings.css";
class CustomerBookings extends React.Component {
    state={
        reviewObj: { reviewer: localStorage.getItem("username"), review: "great !!" },
        name:localStorage.getItem("username"),
        initial: "S",
        showSuccess:false
    }
    componentDidMount() {
        var str = this.state.name;
        var res = str.charAt(0);
        this.setState({
          initial: res,
        });
      }
    handleSubmit = async () => {
        await axios
          .post("http://localhost:8080/api/review/addReview", this.state.reviewObj)
          .then((response) => {
            if (response.status === 200) {
              console.log("submitted");
              this.setState({showSuccess:true})
            }
          })
          .catch((error) => console.log(error));
    
      };
      handleChange = (e) => {
        this.setState({ reviewObj:{reviewer:this.state.name,review: e.target.value }});
      };
  render() {
    return (
      <div>
        <NavBar active="profile" />
        <div className="booking-cont">
          <MDBContainer>
            <MDBRow className="row-cont">
              <MDBCol
                md="8"
                style={{ backgroundColor: "#f5f3f0", borderRadius: "1rem" }}
              >
                <MDBRow>
                  <MDBCol md="8" style={{ padding: "2rem" }}>
                    <p className="h-responsive  my-3 grey-text">
                      <strong style={{ color: "#ffb700" }}>
                        MAKE YOUR TOUR EASY
                      </strong>
                    </p>
                    <h5>
                      Book Online Today. Low Cost Rental from banger&co.lk.
                    </h5>

                    <MDBBtn
                      color="yellow"
                      style={{ marginTop: "1.5rem" }}
                      outline
                      tag="a"
                      href="/fleet"
                    >
                      book now
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="4">
                    <img
                      src={car}
                      alt=""
                      className="img-fluid"
                      style={{ height: "15rem", width: "25rem" }}
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="4">
                <div className="right-cont">
                  <p className="h-responsive  grey-text">
                    How was your last ride?
                  </p>
                  <h6 style={{ fontSize: "0.8rem", marginTop: "-0.8rem" }}>
                    RATE YOUR BOOKING
                  </h6>
                  <div id="initial" className="dot" style={{ textTransform: "capitalize" }}>
                  {this.state.initial}
                  </div>
                  <p className="h-responsive  amber-text">{this.state.reviewer}</p>
                  <hr />
                  <MDBRow style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <MDBCol md="8">
                      <input
                        type="text"
                        id="defaultFormContactNameEx"
                        className="form-control"
                        required
                        value={this.state.reviewObj.review}
                        onChange={this.handleChange}
                    name="review"
                        style={{ marginLeft: 20 }}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBBtn color="black" onClick={this.handleSubmit} size="sm">
                        <MDBIcon icon="paper-plane" />
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
            
                </div>
            
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
          <Alert  variant="success"
           style={{marginTop:'2rem'}}
           dismissible
           onClose={() => {this.setState({showSuccess:false})}}
           show={this.state.showSuccess}
         >
           <p>Successfully reviewed.</p>
         </Alert>
          
        
        </div>
      </div>
    );
  }
}
export default CustomerBookings;
