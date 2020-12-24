/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import babySeat from "../../Images/babyseat.jpg";
import "../AddOnCard/AddOnCard.css";

const AddOnCard = () => {
  return (
    <section className="sec-container">
      <img src={babySeat} width='150px' height='150px' style={{marginLeft:'50px'}}/>
      <div
        style={{
          height: "50px",
          backgroundColor: "#E6E4E4",
          width: "150px",
          marginLeft: "70px",
          marginTop: "-30px",
        }}
      />
      <div className="row d-flex justify-content-center align-items-center ">
      <h4>£10</h4>
      <p style={{fontSize:'0.8rem',padding:'1rem',marginTop:'10px'}}><strong>BABY SEAT</strong></p>
      </div>
   
    </section>
  );
};
export default AddOnCard;
