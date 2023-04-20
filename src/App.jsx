import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import NavBarOffCanvas from './Components/NavBar/NavBarOffCanvas';
import Cards from './Components/Cards/Cards';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

    return (
        <div>
            <NavBarOffCanvas/>
            <ItemListContainer greeting={'¡Hola!'} />
            <Cards/>
        </div>
    );
}

export default App;