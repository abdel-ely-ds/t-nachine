import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components";
import { BACKTEST_PATH, HOME_PATH, LOGIN_PATH, SIGNUP_PATH } from './constants';
import { AuthProvider } from "./contexts/AuthContext";
import GlobalStyles from './Globalstyles';
import { Backtest, Home, Login, Signup } from './pages';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />

        <Switch>
          <Route exact path={HOME_PATH} component={Home} />
          <Route path={LOGIN_PATH} exact component={Login} />
          <Route path={SIGNUP_PATH} exact component={Signup} />
          <PrivateRoute path={BACKTEST_PATH} exact component={Backtest} />
        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
