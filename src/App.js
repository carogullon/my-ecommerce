import React from 'react';
import './App.css';

//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemListContainer/ItemList/ItemList';


const App = () => {
  return (
    <div>
        <ItemListContainer greeting="VK GENTILE - Hecho a mano"></ItemListContainer>
        <NavBar />
        <ItemCount stock="5" initial="1"></ItemCount>
        <ItemList />
    </div>
  );
};

export default App;

