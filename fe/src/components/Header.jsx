import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, user, onLogin, setSearchQuery, activeTab, setActiveTab }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (tab === 'filter') {
      navigate('/filter');
    } else {
      setActiveTab(tab);
      navigate('/');
    }
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo">
          <Link to="/" className="logo-link-clean" onClick={() => setActiveTab('now')}>
            <h2 className="logo-text-cinestar">CINESTAR</h2>
          </Link>
        </div>
        
        <div className="search-pill-modern">
          <input 
            type="text" 
            placeholder="Tìm phim, rạp" 
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-pill-btn-inner">Tìm kiếm</button>
        </div>

        <div className="auth-btns-header">
          {!isLoggedIn ? (
            <>
              <button className="btn-action btn-gold" onClick={onLogin}>ĐĂNG NHẬP</button>
              <button className="btn-action btn-violet">ĐĂNG KÝ</button>
            </>
          ) : (
            <div className="user-profile" onClick={() => setShowDropdown(!showDropdown)}>
              <span className="user-name">{user.name}</span>
              <div className="avatar"><img src={user.avatar} alt="User" /></div>
              {showDropdown && (
                <div className="google-dropdown">
                  <ul>
                    <li>Quản lý tài khoản</li>
                    <li className="logout" onClick={() => window.location.reload()}>Đăng xuất</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <nav className="header-nav-tabs">
        <button 
          className={activeTab === 'now' ? 'nav-tab active' : 'nav-tab'} 
          onClick={() => handleTabClick('now')}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button 
          className={activeTab === 'soon' ? 'nav-tab active' : 'nav-tab'} 
          onClick={() => handleTabClick('soon')}
        >
          PHIM SẮP CHIẾU
        </button>
        <button 
          className="nav-tab" 
          onClick={() => handleTabClick('filter')}
        >
          LỌC PHIM
        </button>
      </nav>
    </header>
  );
};

export default Header;