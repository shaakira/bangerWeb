/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from 'axios';
import {
  MDBInput,
  MDBBtn,
  MDBAnimation,
  MDBIcon,
} from "mdbreact";
import side from "../../Images/log.PNG";
import logo from "../../Images/logo.png";
import "../Login/Login.css";

class Login extends React.Component {
  state={
  user:{userName:'',password:''}
  }
  handleSubmit=async()=>{
   
    //Calling the back end endpoints
    await axios.post("http://localhost:8080/authenticate",this.state.user)
     .then(response => 
     { 
        if(response.status===200){
          localStorage.setItem("username",response.data.username)
          localStorage.setItem("token",response.data.token)
          this.props.history.push("/")
      }}
     )
    .catch(error => 
    { if(error.response.status===401){
      console.log("user Credentials Wrong")
     }
    });
  } 
    

  

  handleChange=e=>{
    //console.log("test change")
    const user ={...this.state.user};
    user[e.currentTarget.name]=e.currentTarget.value;
    this.setState({user});
    // console.log(JSON.stringify(user))
  }
  render() {
    return (
      <section>
        <div className="div-style">
          <div className="inner-div">
            <div className="row" style={{ flex: 1 }}>
              <div
                className="column"
                style={{
                  borderRadius: "10px 0px 0px 10px",
                  flex: 1,
                  padding: "5rem",
                }}
              >
                <MDBAnimation type="slideInRight">
                  <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        id="userName"
                        name="userName"
                        label="Type your username"
                        value={this.state.user.userName}
                        onChange={this.handleChange}
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        
                      />
                      <MDBInput
                        id="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn outline color="amber"
                      onClick={e=>this.handleSubmit()}>
                        Login
                      </MDBBtn>
                    </div>
                    <div className="row" style={{ marginTop: "2rem" }}>
                      <div
                        style={{
                          height: "0.25px",
                          width: "10rem",
                          backgroundColor: "#E6E4E4",
                        }}
                      />
                      <p
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          marginTop: "-0.7rem",
                        }}
                      >
                        or
                      </p>
                      <div
                        style={{
                          height: "0.25px",
                          width: "10rem",
                          backgroundColor: "#E6E4E4",
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="black">
                        <MDBIcon fab icon="google" />
                        <span style={{ marginLeft: "1rem" }}>Google</span>
                      </MDBBtn>
                    </div>
                  </form>
                </MDBAnimation>
              </div>

              <div
                className="column"
                style={{ borderRadius: "0px 10px 10px 0px", flex: 1 }}
              >
                <MDBAnimation type="slideInLeft" style={{ padding: 0 }}>
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <img
                      src={side}
                      style={{
                        width: "500px",
                        height: "530px",
                        marginLeft: "-10px",
                      }}
                      alt=""
                    />
                    <div style={{ marginTop: "-30rem" }}>
                      <a href="/">
                        <img alt="" src={logo} className="logo-img" />
                      </a>
                      <h3 className="h2-responsive font-weight-bold">
                        Hello, Friend!
                      </h3>
                      <p style={{ margin: "2rem" }}>
                        ENTER YOUR PERSONAL DETAILS AND REACH YOUR DESTINATION
                        WITH US.
                      </p>
                      <a
                        href="/register"
                        className="btn btn-dark btn-rounded"
                        style={{ borderRadius: "50px", marginTop: "-1rem" }}
                      >
                        sign up
                      </a>
                    </div>
                  </div>
                </MDBAnimation>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    );
  }
}
export default Login;
