import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import NavBarOffCanvas from './Components/NavBar/NavBarOffCanvas';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

    return (
        <div>
            <NavBarOffCanvas/>
            <ItemListContainer/>
        </div>
    );
}

export default App;