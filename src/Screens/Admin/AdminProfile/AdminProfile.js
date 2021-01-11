import { MDBCol, MDBRow, MDBInput, MDBBtn } from "mdbreact";
import React from "react";
import axios from "axios";
import img from "../../../Images/dq.jpg";
import Alert from "react-bootstrap/Alert";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";
import "../AdminProfile/AdminProfile.css";
class AdminProfile extends React.Component {
  state = {
    user: { customerName: "", email: "" },
    username: localStorage.getItem("username"),
    show: false,
    passwordUser: { password: "" },
    confirmPassword: "",
    showPwdDanger: false,
    showPwdSuccess: false,
  };
  async componentDidMount() {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/user/getUser/${this.state.username}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ user: res.data });
        }
      });
    console.log(this.state.user);
  }
  handleChange = (e) => {
    const user = { ...this.state.user };
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  };
  handleUpdateUser = async () => {
    let token = localStorage.getItem("token");
    await axios
      .post(
        `http://localhost:8080/api/user/update/${this.state.username}`,
        this.state.user,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({ show: true });
        }
      });
    console.log(this.state.user);
  };
  handleConfirmPasswordChange = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };
  onUpdatePasswordClick = async () => {
    if (this.state.confirmPassword === this.state.passwordUser.password) {
      let token = localStorage.getItem("token");
      console.log(token);
      await axios
        .post(
          `http://localhost:8080/api/user/updatePassword/${this.state.username}`,
          this.state.passwordUser,
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              showPwdSuccess: true,
              passwordUser: { password: "" },
              confirmPassword: "",
            });
          }
        });
    } else {
      this.setState({ showPwdDanger: true });
      this.setState({
        showPwdSuccess: true,
        passwordUser: { password: "" },
        confirmPassword: "",
      });
    }
  };
  handlePasswordChange=(e)=>{
    const passwordUser={...this.state.passwordUser};
    passwordUser[e.currentTarget.name]=e.currentTarget.value;
    this.setState({passwordUser});
  }
  render() {
    const enabled =
      this.state.user.customerName !== "" && this.state.user.email !== "";
      const pwdEnabled= this.state.passwordUser.password !== "" && this.state.confirmPassword!=="";
   
    return (
      <div style={{ backgroundColor: "#e6e6e6",height: '850px' }}>
        <SideNav active="profile" />
        <TopNavigation />
        <div className="inner-di">
          <div style={{ margin: "1rem" }}>
            <strong style={{ marginLeft: "1rem" }}>MY PROFILE</strong>
            <div style={{ backgroundColor: "white" }}>
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#ffb700",
                  marginLeft: "0.5rem",
                  width: "102px",
                }}
              />
            </div>

            <div className="admin-cont">
              <MDBRow>
                <MDBCol md="4">
                  <img
                    src={img}
                    alt=""
                    width="150px"
                    style={{ borderRadius: "50%" }}
                  />
                </MDBCol>
                <MDBCol md="8">
                  <h5>Personal Information</h5>
                  <hr />
                  <div>
                    <h6
                      className="mb-2 grey-text"
                      style={{ fontSize: 12, marginLeft: "0.5rem" }}
                    >
                      NAME
                    </h6>
                    <MDBInput
                      style={{
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "-1rem",
                        fontSize: "0.9rem",
                      }}
                      type="text"
                      id="customerName"
                      name="customerName"
                      value={this.state.user.customerName}
                      onChange={this.handleChange}
                      outline
                      required
                    />
                    <h6
                      className="mb-2 grey-text"
                      style={{
                        fontSize: 12,
                        marginTop: "3rem",
                        marginLeft: "0.5rem",
                      }}
                    >
                      EMAIL
                    </h6>
                    <MDBInput
                      style={{
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "-1rem",
                        fontSize: "0.9rem",
                      }}
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.user.email}
                      onChange={this.handleChange}
                      required
                      outline
                    />
                    <div style={{ float: "right" }}>
                      <MDBBtn
                        outline
                        color="black"
                        onClick={this.handleUpdateUser}
                        disabled={!enabled}
                      >
                        Update info
                      </MDBBtn>
                    </div>
                  </div>
                  <Alert
                    variant="success"
                    onClose={() => {
                      this.setState({ show: false });
                    }}
                    dismissible
                    show={this.state.show}
                    style={{ marginTop: "6rem" }}
                  >
                    <Alert.Heading>Success</Alert.Heading>
                    <p>
                      {this.state.username}, your email and name updated
                      successfully.
                    </p>
                  </Alert>
                  <div style={{ marginTop: this.state.show ? "2rem" : "6rem" }}>
                    <h5>Password</h5>
                    <hr />
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 , marginLeft: "0.5rem" }}>
                        NEW PASSWORD
                      </h6>
                      <MDBInput
                        style={{
                          color: "black",
                          marginTop: "-1rem",
                          marginBottom: "-1rem",
                          fontSize: "0.9rem",
                        }}
                        type="password"
                        value={this.state.passwordUser.password}
                        onChange={this.handlePasswordChange}
                        name="password"
                        outline
                      />
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 , marginLeft: "0.5rem",marginTop:'3rem'}}>
                        CONFIRM NEW PASSWORD
                      </h6>
                      <MDBInput
                        
                        style={{
                          color: "black",
                          marginTop: "-1rem",
                          marginBottom: "-1rem",
                          fontSize: "0.9rem",
                        }}
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPasswordChange}
                        outline
                      />
                           <div style={{ float: "right"}}>
                      <MDBBtn color="black" outline disabled={!pwdEnabled} onClick={this.onUpdatePasswordClick}>
                        Update password
                      </MDBBtn>
                    </div>
                  </div>
                  <Alert
            variant="danger"
            onClose={() => {
              this.setState({ showPwdDanger: false });
            }}
            dismissible
            show={this.state.showPwdDanger}
            style={{marginTop:'6rem'}}
          >
            <p>Please make sure your passwords match.</p>
          </Alert>
          <Alert variant="success" onClose={() => {this.setState({showPwdSuccess:false})}} dismissible show={this.state.showPwdSuccess} style={{marginTop:'6rem'}}>
        <Alert.Heading>Success</Alert.Heading>
        <p>{this.state.username}, 
         your password updated successfully.
        </p>
      </Alert>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminProfile;
