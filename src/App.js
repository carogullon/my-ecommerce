import './App.css';
import React from 'react';

//Components

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

class App extends React.Component {

  render () {
    return (
      <div className="App">
          <ItemListContainer greeting="VK GENTILE - Hecho a mano"></ItemListContainer>
          <NavBar />
          <ItemCount stock="5" initial="1"></ItemCount>
        </div> 
    );
  }
}

export default App;
