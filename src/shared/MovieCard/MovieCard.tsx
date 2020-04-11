import React from "react";
import { Movie } from "../../models/Movie.model";
import "./MovieCard.scss";
import { genreService } from "../../services/GenreService";
import { TvModel } from "../../models/Tv.model";

interface Props {
  movie: Movie | TvModel,
}

const MovieCard: React.FC<Props> = (props) => {
  const genre = genreService.getGenres();

  function _getGenre(id: number) {
    const movieGenre = genre.find(g => g.id === id);
    if(movieGenre) {
      return movieGenre.name;
    }
    return "";
  }

  function _getReleaseYear(releaseDate: string) {
    return releaseDate.split("-")[0];
  }

  return (
    <div className="movie-card-container">
      <div className="movie-image-container">
        {/*
          // @ts-ignore */}
        <img src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`} alt={props.movie.title || props.movie.name} />
      </div>
      <div className="movie-data-container">
        {/*
          // @ts-ignore */}
        <p className="movie-title">{props.movie.title || props.movie.name}</p>
        {/*
          // @ts-ignore */}
        <p className="movie-meta">{_getGenre(props.movie.genre_ids[0])}, {_getReleaseYear(props.movie.release_date || props.movie.first_air_date)}</p>
      </div>
    </div>
  )
}

export default MovieCard
