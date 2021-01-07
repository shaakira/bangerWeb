import React from "react";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";
class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <SideNav active="dashboard"/>
        <TopNavigation />
      </div>
    );
  }
}
export default DashBoard;
