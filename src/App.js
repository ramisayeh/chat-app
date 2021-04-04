import "./App.css";
import SignUp from "./comps/register.jsx";
import SignIn from "./comps/login";
import Dashboard from "./comps/dashboard.jsx";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  if (localStorage.getItem("username")) return <Dashboard />;

  return (
    <Router>
      <Switch>
        <Route exact path="/signUp" component={SignUp}>
          <SignUp />
        </Route>
        <Route exact path="/" component={SignIn}>
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
