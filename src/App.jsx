import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import NavBarOffCanvas from './Components/NavBar/NavBarOffCanvas';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './Components/Nosotros/Nosotros';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

    return (
        <BrowserRouter>
            <NavBarOffCanvas/>
            <Routes>
                <Route path='/' element={ <ItemListContainer/> } />
                <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
                <Route path='/nosotros' element={ <Nosotros/> } />
                <Route path='/item/:itemId' element={ <ItemDetailContainer/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;