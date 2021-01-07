/* eslint-disable react/no-direct-mutation-state */
import { MDBBtn , MDBIcon} from "mdbreact";
import React from "react";
import "../EquipmentCard/EquipmentCard.css";

class EquipmentCard extends React.Component {
  equipment = this.props.data;
  state={
    selected: false,
    selectedCount:1,
    data: {}
  };

  onSelectBtn=()=>{
    if(this.state.selected===false){
      this.setState({selected:true})
      this.state.data.id = this.equipment.id
      this.state.data.count = this.state.selectedCount
      this.state.data.price=this.equipment.price;
      this.state.data.name=this.equipment.name;

      this.props.value(this.state.data);
    
    }
    else{
      this.setState({selected:false})
      this.state.data.id = this.equipment.id
      this.state.data.count = null
      this.state.data.price=0
      this.state.data.name=null;

      this.props.value(this.state.data);
    
    }

  }
  
  handleCountSelect=(e)=>{
    let value=e.target.value;
    console.log(value)
    this.setState({selectedCount:value})
    console.log(this.state.selectedCount)
  }

  render() {
    const items = [];
    const count = this.equipment.count;
    for (let index = 1; index <= count; index++) {
      items.push(index);
    }
    return (
      <div className="outer-card">
        <div className="row flex-cont">
          <div
            className="column right-border"
            style={{ flex: 3, height: "120px" }}
          >
            <div
              className="row"
              style={{ paddingLeft: "2rem", paddingTop: "1rem" }}
            >
              <h5 style={{ textTransform: "capitalize" }}>
                {this.equipment.name}
              </h5>
              <h6
                style={{
                  color: "#ffb700",
                  marginLeft: "1rem",
                  marginTop: "0.2rem",
                }}
              >
                £{this.equipment.price} each per day
              </h6>
            </div>
            <p className="grey-text" style={{ marginLeft: "1rem" }}>
              {this.equipment.description}
            </p>
          </div>
          <div
            className="column right-border"
            style={{ flex: 1, height: "120px" }}
          >
            <div style={{ marginTop: "1rem" }}>
              <h6 className="mb-2 grey-text" style={{ fontSize: 12 }}>
                NUMBER
              </h6>
              <select
              onChange={this.handleCountSelect}
                className="browser-default custom-select"
                style={{ border: "solid white", fontWeight: "bold" }}
              >
               { items.map(item=>
                  <option value={item}>{item}</option>
                )
              }
              </select>
            </div>
          </div>
          <div
            className="column"
            style={{ flex: 1.5, height: "120px", textAlign: "center" }}
          >
            { this.state.selected===false? (
               <MDBBtn color="amber" outline style={{ marginTop: "1.5rem" }} onClick={this.onSelectBtn}>
               Select
             </MDBBtn> 
            ):( <MDBBtn color="amber"  style={{ marginTop: "1.5rem" }} onClick={this.onSelectBtn}>
            <MDBIcon icon="check" style={{marginRight:'1rem'}} />
              Selected
            </MDBBtn>)}
           
           
          </div>
        </div>
      </div>
    );
  }
}
export default EquipmentCard;