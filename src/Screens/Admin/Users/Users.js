import React from "react";
import axios from "axios";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";
import {
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import img from "../../../Images/prob.png";
import "../Users/Users.css";
class Users extends React.Component {
  state = {
    users: [],
    active: true,
    blacklistedUsers: [],
  };
  loadData = async () => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/user/getActiveUsers`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ users: res.data });
        }
      });
  };
  loadBlacklisted = async () => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/user/getBlacklistedUsers`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ blacklistedUsers: res.data });
        }
      });
  };
  handleBlacklist = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/user/blacklistUser/${item.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("blacklisted");
          this.loadData();
        }
      })
      .catch((error) => console.log(error));
  };
  handleActivate = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/user/activateUser/${item.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("activated");
          this.loadBlacklisted();
        }
      })
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.loadData();
    this.loadBlacklisted();
  }
  sort(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
       
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  render() {
    const data = this.state.users;
    const blacklisted = this.state.blacklistedUsers;
    return (
      <div style={{ backgroundColor: "#f7f7f7" }}>
        <SideNav active="users" />
        <TopNavigation />

        <div className="inner-di">
          {this.state.active === true ? (
            <div style={{ margin: "1rem", marginTop: "3rem" }}>
              <strong style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                ACTIVE USERS
              </strong>
              <MDBBtn
                style={{ marginTop: "-1rem", float: "right" }}
                size="sm"
                color="black"
                onClick={() => {
                  this.setState({ active: false });
                  this.loadBlacklisted();
                }}
              >
                Blacklisted USERS
              </MDBBtn>

              <div style={{ backgroundColor: "white" }}>
                <div
                  style={{
                    height: "3px",
                    backgroundColor: "#ffb700",
                    marginLeft: "0.5rem",
                    width: "120px",
                  }}
                />
                <div className="search-bar" style={{ height: "60px" }}>
                  <MDBRow>
                  <MDBCol md="1" style={{ marginTop: "-0.8rem" }}>
                      
                      <MDBIcon icon="search" size="lg" />
                     
                    </MDBCol>
                    <MDBCol md="11" style={{ marginTop: "-1.2rem" ,marginLeft:'-2rem'}}>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter username"
                        aria-label="Search"
                        id="myInput"
                        onKeyUp={this.sort}
                      />
                    </MDBCol>
                    
                  </MDBRow>
                </div>
                <div className="search-bar">
                  <MDBTable striped bordered id="myTable">
                    <MDBTableHead style={{ textAlign: "center" }} >
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>USERNAME</th>
                        <th>ACTION</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody style={{ textAlign: "center" }}>
                      {data.map((user) => (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.customerName}</td>
                          <td>{user.email}</td>
                          <td>{user.userName}</td>
                          <td>
                            <MDBBtn
                              outline
                              size="sm"
                              color="red"
                              onClick={this.handleBlacklist.bind(this, user)}
                            >
                              blacklist
                            </MDBBtn>
                          </td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ margin: "1rem", marginTop: "3rem" }}>
              <strong style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                BLACKLISTED USERS
              </strong>
              <MDBBtn
                style={{ marginTop: "-1rem", float: "right" }}
                size="sm"
                color="black"
                onClick={() => {
                  this.setState({ active: true });
                  this.loadData();
                }}
              >
                Active USERS
              </MDBBtn>

              <div style={{ backgroundColor: "white" }}>
                <div
                  style={{
                    height: "3px",
                    backgroundColor: "#ffb700",
                    marginLeft: "0.5rem",
                    width: "170px",
                  }}
                />
                {this.state.blacklistedUsers.length === 0 ? (
                  <div className="search-bar">
                    <div style={{ textAlign: "center" }}>
                      <img src={img} alt="" width="200px" />
                      <h4>NO BLACKLISTED USERS FOUND</h4>
                      <MDBBtn
                        size="sm"
                        color="red"
                        onClick={() => {
                          this.setState({ active: true });
                          this.loadData();
                        }}
                      >
                        <MDBIcon icon="plus" style={{ marginRight: "1rem" }} />
                        Blacklist users
                      </MDBBtn>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="search-bar" style={{ height: "60px" }}>
                      <MDBRow>
                      <MDBCol md="1" style={{ marginTop: "-0.8rem" }}>
                      
                      <MDBIcon icon="search" size="lg" />
                     
                    </MDBCol>
                    <MDBCol md="11" style={{ marginTop: "-1.2rem" ,marginLeft:'-2rem'}}>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter username"
                        aria-label="Search"
                        id="myInput"
                        onKeyUp={this.sort}
                      />
                    </MDBCol>
                      </MDBRow>
                    </div>
                    <div className="search-bar">
                      <MDBTable striped bordered id="myTable">
                        <MDBTableHead style={{ textAlign: "center" }}>
                          <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>USERNAME</th>
                            <th>ACTION</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody style={{ textAlign: "center" }}>
                          {blacklisted.map((user) => (
                            <tr>
                              <td>{user.id}</td>
                              <td>{user.customerName}</td>
                              <td>{user.email}</td>
                              <td>{user.userName}</td>
                              <td>
                                <MDBBtn
                                  outline
                                  size="sm"
                                  color="green"
                                  onClick={this.handleActivate.bind(this, user)}
                                >
                                  activate
                                </MDBBtn>
                              </td>
                            </tr>
                          ))}
                        </MDBTableBody>
                      </MDBTable>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Users;
