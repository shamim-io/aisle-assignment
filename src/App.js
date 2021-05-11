import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import EnterOtp from "./pages/EnterOtp";
import Otp from "./pages/Otp";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Otp} />
        <Route path="/enterOtp" component={EnterOtp} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
