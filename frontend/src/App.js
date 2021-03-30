
import './App.css';
import MatchedCouples from './component/body/MatchedCouples';
import Foot from './component/footer/footer';
import Nav1 from './component/navbar/Nav1';
import {Route, Switch, Redirect} from 'react-router-dom';
import Profile from './component/navbar/Profile';
import Error from './component/navbar/Notfound';
import Home from './component/navbar/Home';

function App() {
  return (
    <>
    <Nav1 />

    <Switch>
      <Route exact path="#About" component={Foot}/>
      <Route exact path="/Profile" component={Profile}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="" component={Home}/>
      <Route exact path="/Notfound" component={Error}/>
      <Redirect to="/NotFound" />
      
    </Switch>
   </>
  );
}

export default App;
