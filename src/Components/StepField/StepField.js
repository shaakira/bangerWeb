import React from "react";
import "../StepField/StepField.css";
class StepField extends React.Component {
    header=this.props.header;
  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <div className="header-container">
          <p>{this.props.header}</p>
        </div>
        <div className="out-cont"></div>
      </div>
    );
  }
}
export default StepField;
