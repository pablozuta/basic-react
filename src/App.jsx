import React from 'react';
import { Route, Routes } from "react-router-dom";
import Banner from './Banner.jsx';
import BarraNavegacion from './components/BarraNavegacion.jsx';
import HomePage from './pages/HomePage.jsx';
import BooksPage from './pages/BooksPage.jsx';


function App() {
  return (
    <div>
      <BarraNavegacion />

      <main>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/books' element={<BooksPage />} />

        </Routes>
      </main>


    </div>
  );
}

export default App;
