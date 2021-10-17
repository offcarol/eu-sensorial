import Home from "./pages/Home";
import { Route, Switch } from 'react-router';
import Humor from './pages/Humor';
import Porque from './pages/PorQue';

// teste para deploy

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/eu-sensorial" component={Home} />
        <Route exact path="/humor" component={Humor} />
        <Route exact path="/porque" component={Porque} />
      </Switch>
    </div>
  );
}

export default App;
