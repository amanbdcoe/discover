import { apiService } from "./ApiService";
import { Movie, MovieResponseModel } from "../models/Movie.model";
import { genreService } from "./GenreService";

class PopularService {

  currentPage: number = 0;
  totalPages: number = 100;
  static getInstance(): PopularService {
    return new PopularService();
  }

  resetFetchedPages() {
    this.currentPage = 0;
  }

  async fetchPopularMovies(filters: {[key: string]: any}): Promise<Movie[]> {
    if(!genreService.getGenres().length) {
      await genreService.fetchGenre();
    }

    if(this.currentPage === this.totalPages) {
      return Promise.resolve([])
    };

    return apiService.get<MovieResponseModel>("/discover/movie", {...filters, page: this.currentPage + 1}).then(popularMovies => {
      this.currentPage = popularMovies.page;
      this.totalPages = popularMovies.total_pages;
      return popularMovies.results;
    });
  }
}

export const popularService = PopularService.getInstance();
