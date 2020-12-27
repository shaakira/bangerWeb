import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/IntroPg/IntroPg";
import FleetPage from "./Screens/Fleet/Fleet";
import Login from "./Screens/Login/Login"
import Register from './Screens/Register/Register'
import AboutUsScreen from "./Screens/AboutUsScreen/AboutUsScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/fleet" component={FleetPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/aboutUs" component={AboutUsScreen}/>

      </Switch>
    </Router>
  );
}

export default App;
