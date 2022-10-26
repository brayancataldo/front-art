import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LinearGradient } from "./screens/LinearGradient";
import { Paleta } from "./screens/Paleta";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Paleta} />
          <Route path="/home" component={Paleta} />
          <Route path="/my-festival" component={Paleta} />
          <Route path="/paleta" component={Paleta} />
          <Route path="/linear-gradient" component={LinearGradient} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
