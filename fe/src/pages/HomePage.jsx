import React from 'react';
import MovieCard from '../components/MovieCard';

const HomePage = ({ searchQuery, activeTab }) => {
  const allMovies = [
    { 
      id: 1, title: "ĐẢO ĐỘC ĐẮC", poster: "/assets/images/Thor.jpg", 
      genre: "Kinh dị", duration: "94", rating: "T18", ratingClass: "t18",
      ratingDesc: "**T18:** Phim dành cho khán giả từ đủ 18 tuổi trở lên",
      times: ["10:50", "13:10", "15:30", "19:00"],
      type: 'now'
    },
    { 
      id: 2, title: "TỬ CHIẾN TRÊN KHÔNG", poster: "/assets/images/Thor.jpg", 
      genre: "Hành động", duration: "118", rating: "T18", ratingClass: "t18",
      ratingDesc: "**T18:** Phim dành cho khán giả từ đủ 18 tuổi trở lên",
      times: ["11:45", "14:00", "16:20"],
      type: 'now'
    }
  ];

  const filtered = allMovies.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
    m.type === activeTab
  );

  return (
    <div className="homepage-wrapper-simple">
      <div className="movie-grid-container">
        {filtered.length > 0 ? (
          filtered.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p style={{textAlign: 'center', width: '100%', padding: '50px'}}>Không có phim trong mục này</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;