/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MDBInput, MDBBtn, MDBAnimation, MDBRow, MDBCol } from "mdbreact";
import side from "../../Images/log.PNG";
import logo from "../../Images/logo.png";
import "../Register/Register.css";
import axios from 'axios';

class Register extends React.Component {
  state={
    user:{userName:'',email:'',password:'',customerName:''}
  }

  handleChange=e=>{
    const user={...this.state.user};
    user[e.currentTarget.name]=e.currentTarget.value;
    this.setState({user});
  }

  handleSubmit =async()=>{
  await  axios.post("http://localhost:8080/signUp",this.state.user)
    .then(response=>{
      if(response.status===200){
        console.log("Registered")
      }
    })
    .catch(error=>
      console.log(error))
  }


  render() {
    return (
      <section>
        <div className="div-styles">
          <div className="inner-divs">
            <div className="row" style={{ flex: 1 }}>
              <div
                className="column"
                style={{ borderRadius: "0px 10px 10px 0px", flex: 1 }}
              >
                <MDBAnimation type="slideInRight">
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <img
                      src={side}
                      style={{
                        width: "500px",
                        height: "530px",
                        marginLeft: "10px",
                      }}
                      alt=""
                    />
                    <div style={{ marginTop: "-30rem" }}>
                    <a href="/"><img alt="" src={logo} className="logo-img" /></a>
                      <h3 className="h2-responsive font-weight-bold">
                        Welcome Back !
                      </h3>
                      <p style={{ margin: "2rem" }}>
                        TO KEEP TRAVEL WITH USE PLEASE LOGIN WITH US YOUR
                        PERSONAL INFO
                      </p>
                      <a
                        href="/login"
                        className="btn btn-dark btn-rounded"
                        style={{ borderRadius: "50px", marginTop: "-1rem" }}
                      >
                        sign IN
                      </a>
                    </div>
                  </div>
                </MDBAnimation>
              </div>
              <div
                className="column"
                style={{
                  borderRadius: "10px 0px 0px 10px",
                  flex: 1,
                  padding: "5rem",
                }}
              >
                <MDBAnimation type="slideInLeft">
                  <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                     
                        <MDBInput
                        id="customerName"
                        name="customerName"
                        value={this.state.user.customerName}
                        onChange={this.handleChange}
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      
                     
                       <MDBInput
                        id="userName"
                        name="userName"
                        value={this.state.user.userName}
                        onChange={this.handleChange}
                        label="Username"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        id="email"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                     
                      <MDBInput
                        id="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center" onClick={e=>this.handleSubmit()}>
                      <MDBBtn outline color="amber">Register</MDBBtn>
                    </div>
                  </form>
                </MDBAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Register;
