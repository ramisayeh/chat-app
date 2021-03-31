import "./App.css";
import SignUp from "./comps/register.jsx";
import SignIn from "./comps/login";
import Dashboard from "./comps/dashboard";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const user = null;

  return (
    <Router>
      <Switch>
        <Route exact path="/signUp" component={SignUp}>
          <SignUp />
        </Route>
        <Route exact path="/signIn" component={SignIn}>
          <SignIn />
        </Route>
        <Route exact path="/Dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
