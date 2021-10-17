import React from 'react';
import './App.css';

//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Header from './components/Header/Header';

//views
import Mochilas from './views/Mochilas/Mochilas';
import Rinioneras from './views/Rinioneras/Rinioneras';
import Carteras from './views/Carteras/Carteras';
import Home from './views/Home/Home';



const App = () => {
  return (
    <Router>
      <div>
        <Header greeting="VK GENTILE - Hecho a mano"/>
        <NavBar />
            <Switch>
              <Route path ="/"  exact component = {Home} />
              <Route path ="/mochilas" component = {Mochilas} />
              <Route path ="/rinioneras" component = {Rinioneras} />
              <Route path ="/carteras" component = {Carteras} />
              <Route path="/detail/:id" component={ItemDetailContainer}/>
            </Switch>
            
      </div>
    </Router>
  );
};

export default App;

