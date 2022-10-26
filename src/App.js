import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LinearGradient } from "./screens/LinearGradient";
import { Paleta } from "./screens/Paleta";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LinearGradient} />
          <Route path="/home" component={LinearGradient} />
          <Route path="/gerador-de-degrade" component={LinearGradient} />
          <Route path="/gerador-de-paleta" component={Paleta} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
