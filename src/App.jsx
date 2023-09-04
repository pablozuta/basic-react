import React from 'react';
import { Route, Routes } from "react-router-dom";

import BarraNavegacion from './components/BarraNavegacion.jsx';
import HomePage from './pages/HomePage.jsx';
import BooksPage from './pages/BooksPage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import TechPage from './pages/TechPage.jsx';


function App() {
  return (
    <div>
      <BarraNavegacion />

      <main>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/movies' element={<MoviesPage/>}/>
          <Route path='/tech' element={<TechPage/>}/>

        </Routes>
      </main>


    </div>
  );
}

export default App;
