import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FilterPage from './pages/FilterPage';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ 
    name: 'PHAN NGU....', 
    avatar: 'https://via.placeholder.com/40', 
    email: 'phannguyenkhoa04@gmail.com' 
  });
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
        <Header 
          isLoggedIn={isLoggedIn} 
          user={user} 
          onLogin={() => setIsLoggedIn(true)} 
          setSearchQuery={setSearchQuery}
        />
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;