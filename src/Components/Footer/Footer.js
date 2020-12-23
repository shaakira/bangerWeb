import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter style={{backgroundColor:'#F8F8F8',marginTop:'-2rem'}} className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left" style={{color:'black',paddingTop:'1rem'}}>
        <MDBRow>
          <MDBCol md="8">
            <h5 className="title">BANGER & CO</h5>
          
          </MDBCol>
          <MDBCol md="1">
            <h6 className="title"><a href="/" style={{color:'black',}}>Home</a></h6>

          </MDBCol>
          <MDBCol md="1">
          <h6 className="title"><a href="/" style={{color:'black',}}>Find a car</a></h6>

          </MDBCol>  
          <MDBCol md="1">
          <h6 className="title"><a href="/" style={{color:'black',}}>About us</a></h6>

          </MDBCol>  
          <MDBCol md="1">
          <h6 className="title"><a href="/" style={{color:'black',}}>Contact</a></h6>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div  style={{backgroundColor:'#d1d1d1', height:'0.01rem', margin:'1rem'}}/>
      <div className="text-center py-3" >
        <MDBContainer fluid style={{color:'black'}}>
          &copy; {new Date().getFullYear()} Copyright:  CB007576 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;