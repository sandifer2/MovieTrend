import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import FavoritesPage from './pages/FavoritesPage';
import RecommendationPage from './pages/RecommendationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Gatekeeper from './services/Gatekeeper';
import { AuthProvider } from './services/AuthContext';


const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Navigation/>
      <Routes>

        <Route element={ <Gatekeeper/>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/recommendations' element={<RecommendationPage/>}/>
        </Route>

        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;


