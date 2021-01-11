import React from "react";
import axios from "axios";
import {
    MDBBtn,
    MDBIcon,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
  } from "mdbreact";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";

class Compare extends React.Component {
  state = {
    list: [],
    vehicleList: [],
    newList: [],
    high:0,
    visible:true
  };
  loadData = async () => {};
  async componentDidMount() {
    const { data: list } = await axios.get(
      "http://localhost:9191/api/webScrape/getData"
    );
    this.setState({ list });
    const { data: vehicleList } = await axios.get(
      "http://localhost:8080/api/v1/vehicle/getVehicles"
    );
    this.setState({ vehicleList });
    console.log(this.state.vehicleList);
    let their = this.state.list;
    let our = this.state.vehicleList;

    for (let i = 0; i < their.length; i++) {
      for (let j = 0; j < our.length; j++) {
        if (their[i].vehicleName === our[j].name) {
          const name = their[i].vehicleName;
          const theirPrice = their[i].ratePerWeek;
          const ourPrice = our[j].price;
          const perWeek = ourPrice * 7 * 255.00;
          const newStr = theirPrice.replace(/,/g,'');
          if (newStr < perWeek) {
            this.setState({high:1})
           
          }
          const x=perWeek.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          const obj = { name: name, theirPrice: theirPrice, ourPrice: x,high:this.state.high };

          this.setState({ newList: [...this.state.newList, obj] });
        }
      }
    }
    console.log(this.state.newList);
  }

  render() {
    return (
      <div>
        <SideNav active="compare" />
        <TopNavigation />
        <div className="inner-di">
          <div style={{ margin: "1rem", marginTop: "3rem" }}>
            <strong style={{ marginLeft: "1rem", marginTop: "1rem" }}>COMPARE</strong>

            <div style={{ backgroundColor: "white" }}>
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#ffb700",
                  marginLeft: "0.5rem",
                  width: "120px",
                }}
              />
            </div>
            {this.state.visible===true?<div>
                <div style={{margin:'1rem',marginRight:'2rem',float:'right'}}>
                    <MDBBtn color="black" onClick={()=>this.setState({visible:false})}>
                        Competitors Price
                    </MDBBtn>
                </div>
               <div className="search-bar">
                   <h6><strong>COMPARISON FOR PRICE PER WEEK</strong></h6>
                   <hr/>
                <MDBTable striped bordered id="myTable">
                  <MDBTableHead style={{ textAlign: "center" }}>
                    <tr>
                      <th>NAME</th>
                      <th>MALKEY</th>
                      <th>BANGERS & CO</th>
                      <th></th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody style={{ textAlign: "center" }}>
                    {this.state.newList.map((vehicle) => (
                      <tr>
                        <td>{vehicle.name}</td>
                        <td>{vehicle.theirPrice}</td>
                        <td>{vehicle.ourPrice}.00</td>
                        <td>{vehicle.high===1?<MDBIcon icon="arrow-up" style={{color:'red'}}/>:<MDBIcon icon="arrow-down"  style={{color:'green'}}/>}</td>
                     
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
                </div>
            </div>:<div>
                <div style={{margin:'1rem',marginRight:'2rem',float:'right'}}>
                    <MDBBtn color="black" onClick={()=>this.setState({visible:true})}>
                         Compare
                    </MDBBtn>
                </div>
               <div className="search-bar">
                   <h6><strong>MALKEY</strong></h6>
                   <hr/>
                <MDBTable striped bordered id="myTable">
                  <MDBTableHead style={{ textAlign: "center" }}>
                    <tr>
                      <th>NAME</th>
                      <th>RATE PER WEEK</th>
                      <th>RATE PER MONTH</th>
                      <th>EXCESS MILEAGE PER DAY</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody style={{ textAlign: "center" }}>
                    {this.state.list.map((vehicle) => (
                      <tr>
                        <td>{vehicle.vehicleName}</td>
                        <td>{vehicle.ratePerWeek}</td>
                        <td>{vehicle.ratePerMonth}</td>
                        <td>{vehicle.excessMileagePerDay}</td>
                     
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
                </div>
            </div>}
            
          </div>
        </div>
      </div>
    );
  }
}
export default Compare;
