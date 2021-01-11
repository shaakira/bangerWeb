import React from "react";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";

class Bookings extends React.Component {
  render() {
    return (
      <div>
        <SideNav active="booking" />
        <TopNavigation />
      </div>
    );
  }
}
export default Bookings;
