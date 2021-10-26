import React from 'react';
import './App.css';

//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Header from './components/Header/Header';
import {ItemsProvider} from './components/Context/ItemsContext';
import ItemDetail from './components/ItemDetailContainer/ItemDetail'



//views
import Mochilas from './views/Mochilas/Mochilas';
import Rinioneras from './views/Rinioneras/Rinioneras';
import Carteras from './views/Carteras/Carteras';
import Home from './views/Home/Home';
import Seccion from './components/Category/Seccion';

const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <Header greeting="VK GENTILE - Hecho a mano"/>
            <Switch>
              <Route path ="/"  exact component = {Home} />
              <Route path ="/mochilas" component = {Mochilas} />
              <Route path ="/rinioneras" component = {Rinioneras} />
              <Route path ="/carteras" component = {Carteras} />
              <Route path="/detail/:id" component={ItemDetailContainer}/>
              <Route path="/category/:categoryId" component={Seccion} />
              <ItemDetail/>
            </Switch>   
      </ItemsProvider>
    </Router>
  );
};

export default App;

