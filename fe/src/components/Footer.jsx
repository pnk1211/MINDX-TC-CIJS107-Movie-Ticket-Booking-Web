import React from 'react';

const Footer = () => {
  return (
    <footer className="complex-footer">
      <div className="footer-top-grid">
        <div className="footer-brand">
          <p className="brand-slogan">BE HAPPY. BE A STAR</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <p className="lang-text">Ngôn ngữ: VN <img src="https://flagcdn.com/w20/vn.png" alt="VN" /></p>
        </div>
        <div className="footer-links">
          <h4>TÀI KHOẢN</h4>
          <ul><li>Đăng nhập</li><li>Đăng ký</li><li>Membership</li></ul>
          <h4 style={{marginTop: '20px'}}>XEM PHIM</h4>
          <ul><li>Phim đang chiếu</li><li>Phim sắp chiếu</li><li>Suất chiếu đặc biệt</li></ul>
        </div>
        <div className="footer-links">
          <h4>THUÊ SỰ KIỆN</h4>
          <ul><li>Thuê rạp</li><li>Các loại hình cho thuê khác</li></ul>
          <h4 style={{marginTop: '20px'}}>CINEMASTAR</h4>
          <ul><li>Giới thiệu</li><li>Liên hệ</li><li>Tuyển dụng</li></ul>
        </div>
        <div className="footer-links">
          <h4>DỊCH VỤ KHÁC</h4>
          <ul><li>Nhà hàng</li><li>Kidzone</li><li>Bowling</li><li>Billiards</li><li>Gym</li><li>Nhà hát Opera</li><li>Coffee</li></ul>
        </div>
        <div className="footer-links">
          <h4>HỆ THỐNG RẠP</h4>
          <ul>
            <li>Tất cả hệ thống rạp</li>
            <li>Quốc Thanh (TP.HCM)</li>
            <li>Hai Bà Trưng (TP.HCM)</li>
            <li>Sinh Viên (TP.HCM)</li>
            <li>Huế (TP. Huế)</li>
            <li>Đà Lạt (Lâm Đồng)</li>
            <li>Lâm Đồng (Đức Trọng)</li>
            <li>Mỹ Tho (Tiền Giang)</li>
            <li>Kiên Giang (An Giang)</li>
          </ul>
        </div>
      </div>
      <div className="footer-map">
        <p>Địa chỉ: Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh</p>
        <div className="map-container">
           <img src="./assets/images/map.jpg" alt="Map Location" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;