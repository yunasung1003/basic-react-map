// import { render } from "react-dom";
import "./styles.css";

export default function App() {
  const movies = [
    { title: "hello world1", year: 2001 },
    { title: "hello world2", year: 2002 },
    { title: "hello world3", year: 2003 },
    { title: "hello world4", year: 2004 }
  ];

  const renderMovies = movies.map((movie) => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Movie List</h1>

      {renderMovies}
      {/* <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div> */}
    </div>
  );
}
