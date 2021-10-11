import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from './Globalstyles';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
