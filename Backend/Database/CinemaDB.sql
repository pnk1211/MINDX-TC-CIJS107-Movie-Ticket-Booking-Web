CREATE DATABASE CinemaDB;
GO

USE CinemaDB;
GO

CREATE TABLE Users (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    full_name NVARCHAR(100),
    phone_number VARCHAR(15),
    role VARCHAR(20) DEFAULT 'customer' CHECK (role IN ('admin', 'customer')),
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE Movies (
    movie_id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(200) NOT NULL,
    description NVARCHAR(MAX),
    director NVARCHAR(100),
    cast NVARCHAR(255),
    genre NVARCHAR(100),
    duration_minutes INT NOT NULL,
    poster_url VARCHAR(255),
    trailer_url VARCHAR(255),
    release_date DATE,
    language NVARCHAR(50),
    is_active BIT DEFAULT 1
);

CREATE TABLE Cinemas (
    cinema_id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    address NVARCHAR(255) NOT NULL,
    map_location VARCHAR(255)
);

CREATE TABLE Rooms (
    room_id INT IDENTITY(1,1) PRIMARY KEY,
    cinema_id INT NOT NULL,
    name NVARCHAR(50) NOT NULL,
    total_seats INT DEFAULT 0,
    FOREIGN KEY (cinema_id) REFERENCES Cinemas(cinema_id) ON DELETE CASCADE
);

CREATE TABLE SeatTypes (
    seat_type_id INT IDENTITY(1,1) PRIMARY KEY,
    type_name NVARCHAR(50) NOT NULL,
    surcharge_price DECIMAL(10, 2) DEFAULT 0.00
);

CREATE TABLE Seats (
    seat_id INT IDENTITY(1,1) PRIMARY KEY,
    room_id INT NOT NULL,
    seat_type_id INT NOT NULL,
    row_code CHAR(2) NOT NULL,
    seat_number INT NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE,
    FOREIGN KEY (seat_type_id) REFERENCES SeatTypes(seat_type_id)
);

CREATE TABLE Showtimes (
    showtime_id INT IDENTITY(1,1) PRIMARY KEY,
    movie_id INT NOT NULL,
    room_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    base_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE
);

CREATE TABLE Snacks (
    snack_id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    description NVARCHAR(MAX),
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    is_active BIT DEFAULT 1
);

CREATE TABLE Bookings (
    booking_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    showtime_id INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    payment_method VARCHAR(50),
    booking_time DATETIME DEFAULT GETDATE(),
    expire_time DATETIME NULL,
    qr_code_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (showtime_id) REFERENCES Showtimes(showtime_id)
);

CREATE TABLE Tickets (
    ticket_id INT IDENTITY(1,1) PRIMARY KEY,
    booking_id INT NOT NULL,
    seat_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id) ON DELETE CASCADE,
    FOREIGN KEY (seat_id) REFERENCES Seats(seat_id)
);

CREATE TABLE BookingSnacks (
    booking_snack_id INT IDENTITY(1,1) PRIMARY KEY,
    booking_id INT NOT NULL,
    snack_id INT NOT NULL,
    quantity INT DEFAULT 1,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id) ON DELETE CASCADE,
    FOREIGN KEY (snack_id) REFERENCES Snacks(snack_id)
);