import React from "react";
import axios from "axios";
import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBContainer,
} from "mdbreact";
import Alert from "react-bootstrap/Alert";
import NavBar from "../../Components/NavBar/NavBar";
import "../Profile/Profile.css";
import Footer from "../../Components/Footer/Footer";

class Profile extends React.Component {
  state = {
    user: { customerName: "", email: "" },
    document: { license: undefined, utility: undefined },
    username: localStorage.getItem("username"),
    modalVisibility: false,
    deleteText: "",
    show: false,
    showDanger: false,
    passwordUser: { password: "" },
    confirmPassword: "",
    showPwdDanger: false,
    showPwdSuccess: false,
    utilityText:"Choose file",
    licenseText:"Choose file",
    alertShow:false

  };
  async componentDidMount() {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/user/getUser/${this.state.username}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          this.setState({ user: res.data });
        }
      });
    console.log(this.state.user.customerName);
  }
  handleChange = (e) => {
    const user = { ...this.state.user };
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  };
  handlePasswordChange = (e) => {
    const passwordUser = { ...this.state.passwordUser };
    passwordUser[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ passwordUser });
  };
  handleConfirmPasswordChange = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };
  handleDeleteChange = (e) => {
    this.setState({ deleteText: e.target.value });
  };
  toggle = () => {
    const { modalVisibility } = this.state;
    this.setState({ deleteText: "" });
    this.setState({
      modalVisibility: !modalVisibility,
    });
    if (this.state.showDanger) {
      this.setState({ showDanger: false });
    }
  };

  onDeleteSubmit = async () => {
    this.setState({ modalVisibility: false });
    if (this.state.deleteText === "DELETE") {
      let token = localStorage.getItem("token");
      await axios
        .get(`http://localhost:8080/api/user/deleteUser/${this.state.username}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
          if (response.status === 200) {
            alert("user  successfully deleted");
            localStorage.clear();
            this.props.history.push("/");

          }
        })
        .catch((error) => {
          this.setState({modalVisibility:false})
          alert(error.response.data.message)});
    } else {
      this.setState({ showDanger: true });
    }
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

  handleUpdateDocuments = async () => {
    let token = localStorage.getItem("token");

    var username = localStorage.getItem("username");
    const formData = new FormData();
    formData.append("files", this.state.document.license);
    formData.append("files", this.state.document.utility);
    formData.append("extra", "estra metadata");
    formData.append("username", username);

    await axios
      .post(`http://localhost:8080/api/user/updateDocuments`, formData, {
        headers: { Authorization: "Bearer " + token },
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({alertShow:true,utilityText:'Choose file',licenseText:'Choose file'})
        }
      })
      .catch((error) => {
        console.log(error);
      });

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
  onlicenseChangeHandler = (e) => {
    const document = { ...this.state.document };
    document[e.currentTarget.name] = e.target.files[0];
    if(e.currentTarget.name==="utility"){
      this.setState({utilityText: e.target.files[0].name})
    }else{
      this.setState({licenseText: e.target.files[0].name})

    }
    this.setState({ document });
  };


  render() {
    const enabled =
      this.state.user.customerName !== "" && this.state.user.email !== "";
    const dlteEnabled = this.state.deleteText !== "";
    const pwdEnabled =
      this.state.passwordUser.password !== "" &&
      this.state.confirmPassword !== "";
    return (
      <div>
        <NavBar active="profile" />
        <div className="profile-container">
          <h2 className="h2-responsive font-weight-bold ">My Profile</h2>
          <hr />
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div className="header-container">
              <p>YOUR INFO</p>
            </div>
            <div className="cont">
              <div className="out-cont">
                <form>
                  <MDBRow style={{ marginTop: "2rem" }}>
                    <MDBCol md="4">
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        EMAIL
                      </h6>
                      <MDBInput
                        borderColor="red"
                        style={{
                          borderColor: "white",
                          color: "black",
                          marginTop: "-1rem",
                          marginBottom: "-1rem",
                        }}
                        type="text"
                        id="email"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                      />
                    </MDBCol>

                    <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />

                    <MDBCol md="4">
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        NAME
                      </h6>
                      <MDBInput
                        borderColor="red"
                        style={{
                          borderColor: "white",
                          color: "black",
                          marginTop: "-1rem",
                          marginBottom: "-1rem",
                        }}
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={this.state.user.customerName}
                        onChange={this.handleChange}
                      />
                    </MDBCol>

                    <div style={{ float: "right", marginLeft: "11rem" }}>
                      <MDBBtn
                        color="black"
                        outline
                        onClick={this.handleUpdateUser}
                        disabled={!enabled}
                      >
                        Update info
                      </MDBBtn>
                    </div>
                  </MDBRow>
                </form>
              </div>
            </div>
          </div>
          <Alert
            variant="success"
            onClose={() => {
              this.setState({ show: false });
            }}
            dismissible
            show={this.state.show}
          >
            <Alert.Heading>Success</Alert.Heading>
            <p>
              {this.state.username}, your email and name updated successfully.
            </p>
          </Alert>
          <hr />
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div className="up-header-container">
              <p>YOUR DOCUMENTS</p>
            </div>
            <div className="cont">
              <div className="out-cont">
                <form>
                  <MDBRow style={{ marginTop: "2rem" }}>
                    <MDBCol md="4">
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        LICENSE IMAGE
                      </h6>
                      <div className="custom-file" style={{marginTop:'1rem'}}>
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        name="license"
                        onChange={this.onlicenseChangeHandler}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                        style={{
                          color: "black",
                          fontSize: "0.9rem",
                        }}
                      >
                        {this.state.licenseText}
                      </label>
                    </div>
                    </MDBCol>

                    <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />

                    <MDBCol md="4">
                      <div>
                      <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                        UTILITY BILL / TAX BILL / BANK STATEMENT IMAGE
                      </h6>
                      <div className="custom-file form-group files color" style={{marginTop:'1rem'}}>
                        
                      <input
                        type="file"
                        className="custom-file-input form-control"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        name="utility"
                        onChange={this.onlicenseChangeHandler}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                        style={{
                          color: "black",
                          fontSize: "0.9rem",
                        }}
                      >
                      {this.state.utilityText}
                      </label>
                    </div>
                   <h6 className="mb-2 " style={{ fontSize: 13,marginTop:'1rem',color: "#c40404" }}> <i
                      class="far fa-question-circle"
                      style={{ color: "#c40404", fontSize: 15,marginRight:'0.5rem'}}
                    />
                    Make sure uploading documents are no older than 3 months. 
                  </h6>
                    </div>
                    </MDBCol>

                    <div style={{ float: "right", marginLeft: "10rem",marginTop:'1rem',marginBottom:'1rem' }}>
                      <MDBBtn
                        color="black"
                        outline
                        onClick={this.handleUpdateDocuments}
                       disabled={this.state.document.utility===undefined &&this.state.document.license===undefined}
                      >
                        Update Documents
                      </MDBBtn>
                    </div>
                  </MDBRow>
                </form>
              </div>
            </div>
          </div>
          <Alert
            variant="success"
            onClose={() => {
              this.setState({ alertShow: false });
            }}
            dismissible
            show={this.state.alertShow}
          >
            <Alert.Heading>Success</Alert.Heading>
            <p>
              {this.state.username}, your documents updated successfully.
            </p>
          </Alert>
          <hr />
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div className="header-container">
              <p>PASSWORD</p>
            </div>
            <div className="cont">
              <div className="out-cont">
                <MDBRow style={{ marginTop: "2rem" }}>
                  <MDBCol md="4">
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      NEW PASSWORD
                    </h6>
                    <MDBInput
                      borderColor="red"
                      style={{
                        borderColor: "white",
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "-1rem",
                      }}
                      type="password"
                      value={this.state.passwordUser.password}
                      onChange={this.handlePasswordChange}
                      name="password"
                    />
                  </MDBCol>

                  <div style={{ width: "1px", backgroundColor: "#E6E4E4" }} />

                  <MDBCol md="4">
                    <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                      CONFIRM NEW PASSWORD
                    </h6>
                    <MDBInput
                      borderColor="red"
                      style={{
                        borderColor: "white",
                        color: "black",
                        marginTop: "-1rem",
                        marginBottom: "-1rem",
                      }}
                      type="password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleConfirmPasswordChange}
                    />
                  </MDBCol>

                  <div style={{ float: "right", marginLeft: "9rem" }}>
                    <MDBBtn
                      color="black"
                      outline
                      disabled={!pwdEnabled}
                      onClick={this.onUpdatePasswordClick}
                    >
                      Update password
                    </MDBBtn>
                  </div>
                </MDBRow>
              </div>
            </div>
          </div>
          <Alert
            variant="danger"
            onClose={() => {
              this.setState({ showPwdDanger: false });
            }}
            dismissible
            show={this.state.showPwdDanger}
          >
            <p>Please make sure your passwords match.</p>
          </Alert>
          <Alert
            variant="success"
            onClose={() => {
              this.setState({ showPwdSuccess: false });
            }}
            dismissible
            show={this.state.showPwdSuccess}
          >
            <Alert.Heading>Success</Alert.Heading>
            <p>{this.state.username}, your password updated successfully.</p>
          </Alert>
          <hr />
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div className="pro-header-container">
              <p>DELETE ACCOUNT</p>
            </div>
            <div className="pro-cont">
              <div className="out-cont" style={{ padding: "2rem" }}>
                <form>
                  <h6 className="mb-2 grey-text" style={{ fontSize: 13 }}>
                    <i
                      class="far fa-question-circle"
                      style={{ color: "black", fontSize: 15 }}
                    />{" "}
                    Once deleted, you will permanently lose all your data linked
                    to your account.
                  </h6>
                  <MDBBtn
                    style={{ marginTop: "2rem" }}
                    color="white"
                    onClick={this.toggle}
                  >
                    delete my account
                  </MDBBtn>
                </form>
              </div>
            </div>
          </div>
          <MDBContainer>
            <MDBModal
              isOpen={this.state.modalVisibility}
              toggle={this.toggle}
              centered
            >
              <MDBModalHeader toggle={this.toggle}>
                Delete Account
              </MDBModalHeader>
              <MDBModalBody>
                <h6 className="mb-2" style={{ fontSize: 14 }}>
                  Deleting your account will remove all your information from
                  out database.This cannot be undone.
                </h6>
                <MDBRow style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                  <MDBCol md="8">
                    <label style={{ fontSize: 12 }} className="grey-text">
                      To confirm this,type "DELETE"
                    </label>
                    <input
                      type="text"
                      id="defaultFormContactNameEx"
                      className="form-control"
                      name="deleteText"
                      required
                      value={this.state.deleteText}
                      onChange={this.handleDeleteChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBBtn
                      color="red"
                      type="submit"
                      style={{ marginTop: "1.5rem" }}
                      onClick={this.onDeleteSubmit}
                      disabled={!dlteEnabled}
                    >
                      delete
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>

          <Alert
            variant="danger"
            onClose={() => {
              this.setState({ showDanger: false });
            }}
            dismissible
            show={this.state.showDanger}
          >
            <p>Banger & Co couldn't delete your account. Try again later.</p>
          </Alert>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Profile;
