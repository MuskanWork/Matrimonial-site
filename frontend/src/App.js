
import './App.css';
import MatchedCouples from './component/body/MatchedCouples';
import Foot from './component/footer/footer';
import Nav1 from './component/navbar/Nav1';
import {Route, Switch, Redirect} from 'react-router-dom';
import Profile from './component/navbar/Profile';
import Notfound from './component/navbar/Notfound';

function App() {
  return (
    <>
    <Nav1 />
  <MatchedCouples/>
    <Foot />

    <Switch>
      <Route exact path="#About" component={Foot}/>
      <Route exact path="/Profile" component={Profile}/>
      <Route exact path="/Notfound" component={Notfound}/>
      <Redirect to="/NotFound" />
      <Route exact path="/" component={Nav1}/>
    </Switch>
   </>
  );
}

export default App;
