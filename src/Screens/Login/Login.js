/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MDBInput, MDBBtn, MDBAnimation } from "mdbreact";
import side from "../../Images/log.PNG";
import logo from "../../Images/logo.png";
import "../Login/Login.css";

class Login extends React.Component {
  render() {
    return (
      <section>
        <div className="row" style={{ margin: "2rem" }}>
          <img alt="" src={logo} className="logo-img" />
          <a href="/">
            <h3 style={{ marginTop: "2rem", color: "black" }}>
              BANGER <span style={{ color: "#ffb700" }}>&</span> CO
            </h3>
          </a>
        </div>

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
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn outline color="amber">
                        Login
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
                    <div style={{ marginTop: "-22rem" }}>
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
        {/* <div style={{backgroundColor:'blue',height:'5rem'}}/> */}
      </section>
    );
  }
}
export default Login;
