import { MDBCol, MDBIcon, MDBRow } from "mdbreact";
import axios from "axios";
import React from "react";

class NotificationCard extends React.Component {
  data = this.props.data;
  handleRemove = async () => {
    let token = localStorage.getItem("token");
    await axios
      .get(
        `http://localhost:8080/api/notifications/deleteNotification/${this.data.id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Notification deleted");
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  render() {
    return (
      <div
        style={{
          height: "100px",
          backgroundColor: "white",
          margin: "1rem",
          paddingLeft: "2rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.12)",
          marginLeft: "4rem",
          marginRight: "4rem",
          borderRadius: "5px",
        }}
      >
        <MDBRow>
          {this.data.type === "cancel" ? (
            <MDBCol
              style={{
                backgroundColor: "#d95d5d",
                color: "white",
                height: "70px",
                textAlign: "center",
                borderRadius: "5px",
              }}
              md="1"
            >
              <MDBIcon
                far
                icon="calendar-times"
                size="2x"
                style={{ marginTop: "1rem" }}
              />
            </MDBCol>
          ) : (
            <MDBCol
              style={{
                backgroundColor: "#5db4d9",
                color: "white",
                height: "70px",
                textAlign: "center",
                borderRadius: "5px",
              }}
              md="1"
            >
              <MDBIcon
                far
                icon="calendar-plus"
                size="2x"
                style={{ marginTop: "1rem" }}
              />
            </MDBCol>
          )}

          <MDBCol md="10">
            <h6 style={{ marginTop: "1.5rem" }}>
              <strong>{this.data.user.userName} </strong>
              {this.data.notification} on<strong> {this.data.time}.</strong>
            </h6>
          </MDBCol>
          <MDBCol>
            <MDBIcon
              far
              icon="times-circle"
              size="1x"
              style={{ marginTop: "1.5rem" }}
              onClick={this.handleRemove}
            />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
export default NotificationCard;
