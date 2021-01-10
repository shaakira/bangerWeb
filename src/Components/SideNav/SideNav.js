import React from "react";
import logo from "../../Images/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";
import "../SideNav/SideNav.css";

class SideNav extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar-fixed position-fixed nv-style">
          <a href="#!" className="logo-wrapper waves-effect">
            <img
              alt="MDB React Logo"
              className="img-fluid img-stl"
              src={logo}
            />
          </a>
          <MDBListGroup className="list-group-flush">
            <NavLink exact={true} to="/" activeClassName="activeClass">
              <MDBListGroupItem
                className="nav-itm"
                style={{
                  backgroundColor: "#ffb700",
                  color:
                    this.props.active === "dashboard"
                      ? "white"
                      : "rgb(58, 58, 58)",
                }}
              >
                <MDBIcon icon="chart-pie" className="mr-3" />
                DASHBOARD
              </MDBListGroupItem>
            </NavLink>
            <NavLink to="/adminProfile" activeClassName="activeClass">
              <MDBListGroupItem
                className="nav-itm"
                style={{
                  backgroundColor: "#ffb700",
                  color:
                    this.props.active === "profile"
                      ? "white"
                      : "rgb(58, 58, 58)",
                }}
              >
                <MDBIcon icon="user" className="mr-3" />
                PROFILE
              </MDBListGroupItem>
            </NavLink>
            <NavLink to="/tables" activeClassName="activeClass">
              <MDBListGroupItem
                className="nav-itm"
                style={{
                  backgroundColor: "#ffb700",
                  color:
                    this.props.active === "booking"
                      ? "white"
                      : "rgb(58, 58, 58)",
                }}
              >
                <MDBIcon icon="calendar-check" className="mr-3" />
                BOOKINGS
              </MDBListGroupItem>
            </NavLink>
            <NavLink to="/maps" activeClassName="activeClass">
              <MDBListGroupItem
                className="nav-itm"
                style={{
                  backgroundColor: "#ffb700",
                  color:
                    this.props.active === "vehicle"
                      ? "white"
                      : "rgb(58, 58, 58)",
                }}
              >
                <MDBIcon icon="car" className="mr-3" />
                VEHICLES
              </MDBListGroupItem>
            </NavLink>
            <NavLink to="/equipments" activeClassName="activeClass">
              <MDBListGroupItem
                className="nav-itm"
                style={{
                  backgroundColor: "#ffb700",
                  color:
                    this.props.active === "equipments"
                      ? "white"
                      : "rgb(58, 58, 58)",
                }}
              >
                <MDBIcon icon="tools" className="mr-3" />
                EQUIPMENT
              </MDBListGroupItem>
            </NavLink>
            <NavLink to="/users" activeClassName="activeClass">
              <MDBListGroupItem
                className="nav-itm"
                style={{
                  backgroundColor: "#ffb700",
                  color:
                    this.props.active === "users"
                      ? "white"
                      : "rgb(58, 58, 58)",
                }}
              >
                <MDBIcon icon="users" className="mr-3" />
                USERS
              </MDBListGroupItem>
            </NavLink>
            <NavLink to="/adminContact" activeClassName="activeClass">
              <MDBListGroupItem
                className="nav-itm"
                style={{
                  backgroundColor: "#ffb700",
                  color:
                    this.props.active === "contact"
                      ? "white"
                      : "rgb(58, 58, 58)",
                }}
              >
                <MDBIcon icon="envelope" className="mr-3" />
                CONTACT
              </MDBListGroupItem>
            </NavLink>
            <div className="divider div-stl" />
            <div className="bottom_con">
              <p>0117 675 100</p>
              <p style={{ marginTop: "-1rem" }}>Bangerandco@gmail.com</p>
            </div>
          </MDBListGroup>
        </div>
      </div>
    );
  }
}
export default SideNav;
