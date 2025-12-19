import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ isLoggedIn, user, onLogin, setSearchQuery }) => {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo">
          <Link to="/" className="logo-link-clean">
            <h2 className="logo-text-cinestar">CINESTAR</h2>
          </Link>
        </div>
        
        <div className="search-box-wrapper">
          <div className="search-pill-modern">
            <input 
              type="text" 
              placeholder="Tìm phim, rạp" 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-pill-btn-inner">Tìm kiếm</button>
          </div>
        </div>

        <div className="auth-group-wrapper">
          {!isLoggedIn ? (
            <div className="auth-btns-header">
              <button className="btn-action btn-gold" onClick={onLogin}>ĐĂNG NHẬP</button>
              <button className="btn-action btn-violet">ĐĂNG KÝ</button>
            </div>
          ) : (
            <div className="user-nav-profile">
              <span className="user-display-name">{user.name}</span>
              <div className="avatar-frame-small">
                <img src={user.avatar} alt="User" />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <nav className="header-bottom-nav">
        <ul>
          <li>Chọn rạp</li>
          <li>Lịch chiếu</li>
          <li>Khuyến mãi</li>
          <li>Tổ chức sự kiện</li>
          <li>Dịch vụ giải trí khác</li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "nav-item-active" : ""}>Giới thiệu</NavLink></li>
          <li><NavLink to="/feedback" className={({isActive}) => isActive ? "nav-item-active" : ""}>Góp ý</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;