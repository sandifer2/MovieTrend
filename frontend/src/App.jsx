import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import FavoritesPage from './pages/FavoritesPage';


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;


