import { apiService } from "./ApiService";
import { Genre } from "../models/Genre.model";

class GenreService {

  private allGenres: Genre[] = [];
  private movieGenres: Genre[] = [];
  private tvGenres: Genre[] = [];

  static getInstance(): GenreService {
    return new GenreService();
  }

  getGenres() {
    return this.allGenres;
  }

  getMovieGenres() {
    return this.movieGenres;
  }

  getTvGenres() {
    return this.tvGenres;
  }

  fetchGenre() {
    return Promise.all([
      apiService.get<{"genres": Genre[]}>("/genre/movie/list"),
      apiService.get<{"genres": Genre[]}>("/genre/tv/list")
    ]).then(allGenre => {
      this.movieGenres = allGenre[0].genres;
      this.tvGenres = allGenre[1].genres;
      const ids = this.movieGenres.map(genre => genre.id);
      this.allGenres = this.movieGenres.concat(this.tvGenres.filter((genre) => {
        return ids.includes(genre.id)
      }));
      return;
    })
  }
}

export const genreService = GenreService.getInstance();
