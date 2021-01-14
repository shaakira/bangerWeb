import React from "react";
import axios from "axios";

import NotificationCard from "../../../Components/NotificationCard/NotificationCard";
import SideNav from "../../../Components/SideNav/SideNav";
import TopNavigation from "../../../Components/TopNavigation/TopNavigation";

class Notification extends React.Component {
    state={
        notificationList:[]
    }
    async componentDidMount(){
        let token=localStorage.getItem("token");
        await axios
        .get(`http://localhost:8080/api/notifications/getAllNotifications`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          if (res.status === 200) {
            this.setState({ notificationList: res.data });
          }
        });
    }
  render() {
      const data=this.state.notificationList;
    return (
      <div>
        <SideNav active="dashboard" />
        <TopNavigation />
        <div
          style={{
            backgroundColor: "#e6e6e4",
            marginLeft: "250px",
            textAlign: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          NOTIFICATIONS ({this.state.notificationList.length})
        </div>
        <div  style={{
            marginLeft: "250px",
            marginTop:'3rem'
          }}>
              {data.map((notification)=>(
                <NotificationCard data={notification}/>
              ))}
            
        </div>
      </div>
    );
  }
}
export default Notification;
