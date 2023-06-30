import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/NaviBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Home} from './pages/Home'
import {Users} from './pages/Users'
import {About} from './pages/About'
import { connect } from 'react-redux';


function App() {
  return (
    <Router>
      <NaviBar></NaviBar>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/users' Component={Users} />
          <Route path='/about' Component={About} />
        </Routes>
      
    </Router>
  );
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
