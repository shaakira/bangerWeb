import React from "react";
import "../ReviewCard/ReviewCard.css";

class ReviewCard extends React.Component {
  review = this.props.data;
  state = {
    initial: "S",
  };
  componentDidMount() {
    var str = this.review.reviewer;
    var res = str.charAt(0);
    this.setState({
      initial: res,
    });
  }
  render() {
    return (
      <div className="rev-container">
        <div className="row">
          <div
            className="rounded-text"
            id="initial"
            style={{ textTransform: "capitalize" }}
          >
            {this.state.initial}
          </div>

          <p style={{ textTransform: "capitalize" }}>{this.review.reviewer}</p>
        </div>
        <p className="grey-text date-text">{this.review.date}</p>
        <div
          style={{
            width: "100%",
            marginTop: "1rem",
            marginBottom: "1rem",
            height: "1px",
            backgroundColor: "#E6E4E4",
          }}
        />
        <p className="dark-grey-text ">
          <i className="fa fa-quote-left pr-2" />
          {this.review.review}
        </p>
      </div>
    );
  }
}
export default ReviewCard;
