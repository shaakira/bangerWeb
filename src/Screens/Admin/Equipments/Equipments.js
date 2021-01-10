import React from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBInput,
} from "mdbreact";
import Alert from "react-bootstrap/Alert";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";
import "../Equipments/Equipments.css";
class Equipments extends React.Component {
  state = {
    equipmentList: [],
    modal: false,
    equipment: { id: "", name: "", description: "", count: "", price: "" },
    show: false,
  };
  loadData = async () => {
    const { data: equipmentList } = await axios.get(
      "http://localhost:8080/api/equipment/getAllEquipments"
    );
    this.setState({ equipmentList });
  };
  componentDidMount() {
    this.loadData();
  }
  openModal = (item) => {
    this.setState({ equipment: item, modal: true });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleChange = (e) => {
    const equipment = { ...this.state.equipment };
    equipment[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ equipment });
  };
  handleUpdateEquipment = async () => {
    let token = localStorage.getItem("token");
    await axios
      .post(
        `http://localhost:8080/api/equipment/updateEquipment/${this.state.equipment.id}`,
        this.state.equipment,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          this.toggle();
          this.loadData();
          this.setState({ show: true });
        }
      });
  };
  handleDelete = async (item) => {
    let token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/equipment/deleteEquipment/${item.id}`, {
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
  sort() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
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
    const data = this.state.equipmentList;
    return (
      <div style={{ backgroundColor: "#e6e6e6" }}>
        <SideNav active="equipments" />
        <TopNavigation />
        <div className="inner-di">
          <div style={{ margin: "1rem", marginTop: "3rem" }}>
            <strong style={{ marginLeft: "1rem", marginTop: "1rem" }}>
              EQUIPMENTS
            </strong>

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
                  <MDBCol
                    md="7"
                    style={{ marginTop: "-1.2rem", marginLeft: "-2rem" }}
                  >
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter name"
                      aria-label="Search"
                      id="myInput"
                      onKeyUp={this.sort}
                    />
                  </MDBCol>
                  <MDBCol
                    md="4"
                    style={{ marginTop: "-1.8rem", marginLeft: "2rem" }}
                  >
                    <MDBBtn color="black">
                      <MDBIcon icon="plus" style={{ marginRight: "1rem" }} />
                      add equipment
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="search-bar">
                <MDBTable striped bordered id="myTable">
                  <MDBTableHead style={{ textAlign: "center" }}>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>DESCRIPTION</th>
                      <th>COUNT</th>
                      <th>PRICE</th>
                      <th>ACTION</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody style={{ textAlign: "center" }}>
                    {data.map((equipment) => (
                      <tr>
                        <td>{equipment.id}</td>
                        <td>{equipment.name}</td>
                        <td>{equipment.description}</td>
                        <td>{equipment.count}</td>
                        <td>{equipment.price}</td>
                        <td>
                          <MDBBtn
                            outline
                            size="sm"
                            color="yellow"
                            onClick={this.openModal.bind(this, equipment)}
                          >
                            <MDBIcon icon="pen" />
                          </MDBBtn>
                          <MDBBtn
                            outline
                            size="sm"
                            color="red"
                            onClick={this.handleDelete.bind(this, equipment)}
                          >
                            <MDBIcon icon="trash-alt" />
                          </MDBBtn>
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
                <Alert
                  variant="success"
                  dismissible
                  show={this.state.show}
                  onClose={() => this.setState({ show: false })}
                >
                  <p>Equipment successfully updated !</p>
                </Alert>
              </div>
            </div>
          </div>
        </div>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
          <MDBModalBody>
            <div>
              <div className="header-box">
                <div>
                  <h4>
                    <strong>EDIT</strong>
                  </h4>
                </div>
              </div>
              <div className="btn-cont">
                <MDBBtn size="sm" color="white" onClick={this.toggle}>
                  CANCEL
                </MDBBtn>
                <MDBBtn
                  size="sm"
                  color="black"
                  onClick={this.handleUpdateEquipment}
                >
                  submit
                </MDBBtn>
              </div>
            </div>
            <div
              style={{
                margin: "2rem",
                marginTop: "3rem",
                marginBottom: "3rem",
              }}
            >
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
                id="name"
                name="name"
                value={this.state.equipment.name}
                onChange={this.handleChange}
                outline
                required
              />
              <h6
                className="mb-2 grey-text"
                style={{
                  fontSize: 12,
                  marginLeft: "0.5rem",
                  marginTop: "2rem",
                }}
              >
                COUNT
              </h6>
              <MDBInput
                style={{
                  color: "black",
                  marginTop: "-1rem",
                  marginBottom: "-1rem",
                  fontSize: "0.9rem",
                }}
                type="text"
                id="count"
                name="count"
                value={this.state.equipment.count}
                onChange={this.handleChange}
                outline
                required
              />
              <h6
                className="mb-2 grey-text"
                style={{
                  fontSize: 12,
                  marginLeft: "0.5rem",
                  marginTop: "2rem",
                }}
              >
                DESCRIPTION
              </h6>
              <MDBInput
                style={{
                  color: "black",
                  marginTop: "-1rem",
                  marginBottom: "-1rem",
                  fontSize: "0.9rem",
                }}
                type="text"
                id="description"
                name="description"
                value={this.state.equipment.description}
                onChange={this.handleChange}
                outline
                required
              />
              <h6
                className="mb-2 grey-text"
                style={{
                  fontSize: 12,
                  marginLeft: "0.5rem",
                  marginTop: "2rem",
                }}
              >
                PRICE
              </h6>
              <MDBInput
                style={{
                  color: "black",
                  marginTop: "-1rem",
                  marginBottom: "-1rem",
                  fontSize: "0.9rem",
                }}
                type="text"
                id="price"
                name="price"
                value={this.state.equipment.price}
                onChange={this.handleChange}
                outline
                required
              />
            </div>
          </MDBModalBody>
        </MDBModal>
      </div>
    );
  }
}
export default Equipments;
