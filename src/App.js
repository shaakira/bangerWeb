import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/IntroPg/IntroPg";
import FleetPage from "./Screens/Fleet/Fleet";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import AboutUsScreen from "./Screens/AboutUsScreen/AboutUsScreen";
import ContactUs from "./Screens/ContactUs/ContactUs";
import Booking1 from "./Screens/Booking/BookingSteps/BookingStep1/BookingStep1";
import Booking2 from "./Screens/Booking/BookingSteps/BookingStep2/BookingStep2";
import Booking3 from "./Screens/Booking/BookingSteps/BookingStep3/BookingStep3";
import Booking4 from "./Screens/Booking/BookingSteps/BookingStep4/BookingStep4";
import Profile from './Screens/Profile/Profile'


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
        <Route exact path="/booking1" component={Booking1} />
        <Route exact path="/booking2" component={Booking2} />
        <Route exact path="/booking3" component={Booking3} />
        <Route exact path="/booking4" component={Booking4} />
        <Route exact path="/profile" component={Profile} />

      </Switch>
    </Router>
  );
}

export default App;
