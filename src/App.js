import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/navbar';
import Details from './components/Notices/Details';
import Cio from './views/Cio';
import Home from './views/Home';
import Notices from './views/Notices';
// import 'moment/locale/es-us';

function App() {
  return (
    
      <div className="App">
            <NavBar/>
            <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              {/* <Route exact path='/noticias' component={Notices} /> */}
              {/* <Route exact path='/noticias/:id' component={Details} /> */}
              <Route exact path='/' component={Cio} />

            </Switch>
            <Footer/>
      </div>
   
  );
}

export default App;
