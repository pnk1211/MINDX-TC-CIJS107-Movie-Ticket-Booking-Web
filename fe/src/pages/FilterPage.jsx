import React from 'react';
import MovieCard from '../components/MovieCard';

const FilterPage = () => {
  const filterMovies = [
    { 
      id: 3, title: "THOR: THẾ GIỚI BÓNG TỐI", poster: "/assets/images/Thor.jpg", 
      genre: "Hành động, Siêu anh hùng", duration: "112", rating: "T13", ratingClass: "t13",
      ratingDesc: "**T13:** Phim dành cho khán giả từ đủ 13 tuổi trở lên",
      times: ["10:00", "13:00", "16:00"] 
    }
  ];

  return (
    <div className="filter-view-container">
      <div className="filter-options-panel">
        <div className="filter-row">
          <select className="custom-select"><option>Định dạng</option></select>
          <select className="custom-select"><option>Thể loại</option></select>
          <select className="custom-select"><option>Quốc gia</option></select>
          <select className="custom-select"><option>Năm</option></select>
          <button className="btn-trigger-filter">Lọc phim</button>
        </div>
      </div>

      <div className="movie-grid-container">
        {filterMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FilterPage;