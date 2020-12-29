/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import {
  MDBMask,
  MDBRow,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import ScrollAnimation from "react-animate-on-scroll";
import slider1 from "../../Images/about.PNG";
import story from "../../Images/story.PNG";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "../AboutUsScreen/AboutUsScreen.css";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

class AboutUsScreen extends React.Component {
  state = {
    modalVisibility: false,
    reviewObj: { reviewer: "", review: "" },
    reviewList: [],
  };

  toggle = () => {
    const { modalVisibility } = this.state;
    this.setState({
      modalVisibility: !modalVisibility,
    });
  };
  handleChange = (e) => {
    const reviewObj = { ...this.state.reviewObj };
    reviewObj[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ reviewObj });
  };
  getReviews = async () => {
    const { data: reviewList } = await axios.get(
      "http://localhost:8080/api/review/getAllReviews"
    );
    this.setState({ reviewList });
  };
  handleSubmit = async () => {
    await axios
      .post("http://localhost:8080/api/review/addReview", this.state.reviewObj)
      .then((response) => {
        if (response.status === 200) {
          console.log("submitted");
        }
      })
      .catch((error) => console.log(error));
    this.toggle();
    this.getReviews();
  };

  async componentDidMount() {
    this.getReviews();
  }
  render() {
    const data = this.state.reviewList;
    return (
      <div id="minimalistintro">
        <NavBar active="aboutUs" />
        <MDBView src={slider1}>
          <MDBMask />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ marginTop: "8rem", marginLeft: "-20rem" }}
          >
            <MDBRow>
              <MDBAnimation className="black-text text-center text-md-left  mt-xl-5 mb-5">
                <ScrollAnimation animateIn="bounceInLeft">
                  <h1
                    className="h1-responsive font-weight-bold"
                    style={{ fontSize: "5rem" }}
                  >
                    ABOUT
                  </h1>
                  <h1
                    className="h1-responsive "
                    style={{
                      fontSize: "3rem",
                      border: "1.5px solid #ffb700",
                      padding: "0.5rem",
                      marginBottom: "2rem",
                    }}
                  >
                    BANGER & CO
                  </h1>
                  <h3 className="h1-responsive ">
                    Let us tell you <br /> Our story
                  </h3>
                  <div
                    style={{
                      height: "1px",
                      width: "5rem",
                      backgroundColor: "#ffb700",
                    }}
                  />
                  <h6 style={{ marginTop: "2rem" }}>
                    DRIVING SINCE{" "}
                    <span style={{ color: " #ffb700" }}>1990</span>
                  </h6>
                </ScrollAnimation>
              </MDBAnimation>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <div className="inner-card-container text-center my-5">
          <MDBRow style={{ padding: "2rem" }}>
            <MDBCol md="4">
              <MDBIcon icon="car" size="3x" className="white-text" />
              <h5 className="font-weight-bold my-4 white-text">
                VARIETY OF CAR BRANDS
              </h5>
              <p className="grey-text mb-md-0 mb-5">
                Whether on business or pleasure,our top quality fleet features
                vehicles for just about every occasions.From 7-seater passenger
                vans, family estate cars, hatchbacks,saloon cars,to small town
                cars, we can meet your mobility needs.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="smile" size="3x" className="white-text" />
              <h5 className="font-weight-bold my-4 white-text">
                BEST RATE GUARANTEE
              </h5>
              <p className="grey-text mb-md-0 mb-5">
                There are lots of places you can book a vehicle on the web, but
                you'll always find the BEST rate right here, guaranteed.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon far icon="heart" size="3x" className="white-text" />
              <h5 className="font-weight-bold my-4 white-text">
                AWESOME CLIENT SUPPORT
              </h5>
              <p className="grey-text mb-md-0 mb-5">
                our motivation is you,our client,because we know that good is
                not good enough is better is expected.You are the most important
                person in our business. Everything we do, we do for you in order
                to create a product that excites and moves.
              </p>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBRow>
          <MDBCol md="7" style={{ padding: "4rem" }}>
            <div className="row">
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#ffb700",
                  height: "25px",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              />
              <p className="grey-text">ABOUT US</p>
            </div>

            <h3 className="h1-responsive ">
              Let us tell you <br /> Our story
            </h3>
            <p className="grey-text">
              Banger & Co has operated throughout the island , since 1990.
              Equipped with a large rental car fleet and following the norms of
              an environmentally sensitive business firm, our customers:
              <li>Enjoy trips in contemporary and safe cars</li>
              <li>Enjoy high quality service</li>
              <li>Offset carbon emissions</li>
              Environmental sustainability is our main concern. We are a
              trustworthy and responsible car rental company. Whether you are
              searching for a vehicle for leisure or business, we have a range
              of rental cars to suit your needs for a relaxing vacation and
              business travel. All our cars are new and available in excellent
              mechanical condition. Today, our massive network means Enterprise
              is the largest transportation solutions provider. We offer
              different modes of cars. We take an active role in sustainability,
              not only because it’s smart for our business, but because we
              believe in making the world a better place for future generations.
              Because of our size, we are in a unique position to foster
              innovation, advance research and test market-driven solutions.{" "}
            </p>
          </MDBCol>
          <MDBCol md="4" style={{ padding: "2rem" }}>
            <img alt="" src={story} className="img-fluid" />
          </MDBCol>
        </MDBRow>
        <div style={{ margin: "4rem" }}>
          <div className="row">
            <div
              style={{
                width: "1px",
                backgroundColor: "#ffb700",
                height: "25px",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            />
            <p className="grey-text">REVIEW</p>
          </div>

          <h3 className="h1-responsive ">
            Why Our Customers <br /> love Us?
          </h3>
        </div>
        <MDBRow>
          <MDBCol md="6">
            {data.map((review) => (
              <ReviewCard data={review} />
            ))}
          </MDBCol>
          <MDBCol md="6">
            <div className="review-container">
              <h3 className="font-weight-bold">Leave Us a Review</h3>
              <p style={{ marginTop: "1rem" }}>
                We've found that our customer reviews are very helpful in
                keeping our business thriving. We would truly appreciate a
                review from you !
              </p>
              <MDBBtn
                outline
                color="yellow"
                style={{ marginTop: "1rem" }}
                onClick={this.toggle}
              >
                write a review
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <MDBModal
            isOpen={this.state.modalVisibility}
            toggle={this.toggle}
            centered
          >
            <MDBModalHeader toggle={this.toggle}>Write a Review</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer>
                <form>
                  <label
                    htmlFor="defaultFormContactNameEx"
                    className="grey-text"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactNameEx"
                    className="form-control"
                    name="reviewer"
                    onChange={this.handleChange}
                    value={this.state.reviewObj.reviewer}
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactMessageEx"
                    className="grey-text"
                  >
                    Your message
                  </label>
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
                    name="review"
                    value={this.state.reviewObj.review}
                    onChange={this.handleChange}
                  />
                </form>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="#E6E4E4" outline onClick={this.toggle}>
                Cancel
              </MDBBtn>
              <MDBBtn color="black" onClick={(e) => this.handleSubmit()}>
                Submit
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>

        <div style={{ marginTop: "5rem" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutUsScreen;
