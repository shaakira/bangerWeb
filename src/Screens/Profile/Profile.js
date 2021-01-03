import React from "react";
import axios from "axios";
import { MDBCol, MDBRow, MDBInput, MDBBtn } from "mdbreact";
import NavBar from "../../Components/NavBar/NavBar";
import "../Profile/Profile.css";
import Footer from "../../Components/Footer/Footer";

class Profile extends React.Component {
    state={
        user: {customerName:'',email:''},
        username:localStorage.getItem("username"),
    }
    async componentDidMount(){
        let token=localStorage.getItem("token");
        console.log(token)
    await    axios.get(`http://localhost:8080/api/user/getUser/${this.state.username}`
        , { headers: {Authorization: "Bearer "+ token}}
        ).then(res => {
            if(res.status===200){
            this.setState({user:res.data});
            }
        });
        console.log(this.state.user);
       
    }
    handleChange=e=>{
        const user={...this.state.user};
        user[e.currentTarget.name]=e.currentTarget.value;
        this.setState({user});
      }
  render() {
      
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
                      <MDBBtn color="black" outline>
                        Update info
                      </MDBBtn>
                    </div>
                  </MDBRow>
                </form>
              </div>
            </div>
          </div>
        
        <hr />
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div className="header-container">
              <p>PASSWORD</p>
            </div>
            <div className="cont">
              <div className="out-cont">
                <form>
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
                      />
                    </MDBCol>
                    

                    
                    <div style={{ float: "right", marginLeft: "9rem" }}>
                      <MDBBtn color="black" outline>
                        Update password
                      </MDBBtn>
                    </div>
                  </MDBRow>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        </div>
    );
  }
}
export default Profile;
