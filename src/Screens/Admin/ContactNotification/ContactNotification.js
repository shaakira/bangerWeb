import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from "axios";
import React from "react";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";
import "../ContactNotification/ContactNotification.css";
class ContactNotification extends React.Component {
  state = {
    contact: { name: "", email: "", message: "" },
    contactList: [],
  };
  loadData = async () => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/contact/getAllContacts`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ contactList: res.data });
        }
      });
  };
  componentDidMount() {
    this.loadData();
  }
  handleDelete = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/contact/deleteContact/${item.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("deleted");
          this.loadData();
        }
      })
      .catch((error) => console.log(error));
  };
  render() {
    const data = this.state.contactList;
    return (
      <div style={{ backgroundColor: "#e6e6e6" }}>
        <SideNav active="contact" />
        <TopNavigation />
        <div className="inner-di">
          <div className="search-bar">
            <MDBTable striped bordered>
              <MDBTableHead style={{ textAlign: "center" }}>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>MESSAGE</th>
                  <th>ACTION</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody style={{ textAlign: "center" }}>
                {data.map((contact) => (
                  <tr>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                    <td>
                      <MDBBtn
                        size="sm"
                        color="red"
                        onClick={this.handleDelete.bind(this, contact)}
                      >
                        delETE
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactNotification;
