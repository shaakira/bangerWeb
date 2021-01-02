import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/IntroPg/IntroPg";
import FleetPage from "./Screens/Fleet/Fleet";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import AboutUsScreen from "./Screens/AboutUsScreen/AboutUsScreen";
import ContactUs from "./Screens/ContactUs/ContactUs";
import Booking from "./Screens/Booking/Booking";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/fleet" component={FleetPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/aboutUs" component={AboutUsScreen} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
    </Router>
  );
}

export default App;
