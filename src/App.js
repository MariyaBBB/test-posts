import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/NaviBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { HomePage } from './pages/HomePage'
import { UsersPage } from './pages/UsersPage'
import { AboutPage } from './pages/AboutPage'
import { connect } from 'react-redux';


function App() {
  return (
    <Router>
      <NaviBar></NaviBar>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/users/:id' Component={UsersPage} />
          <Route path='/about' Component={AboutPage} />
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
