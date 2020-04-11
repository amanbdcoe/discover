import { apiService } from "./ApiService";
import { Movie, MovieResponseModel } from "../models/Movie.model";
import { MediaType } from "../enum/media-type.enum";
import { TimeWindow } from "../enum/time-window.enum";
import { TvModel } from "../models/Tv.model";
import { genreService } from "./GenreService";

class TrendingService {

  trendingResult: {[key: string]: Movie[]} = {};
  static getInstance(): TrendingService {
    return new TrendingService();
  }

  async fetchTrendingList(filters: {media_type: MediaType, time_window: TimeWindow}): Promise<Movie[] | TvModel[]> {
    const searchQuery = JSON.stringify(filters);

    if(!genreService.getGenres().length) {
      await genreService.fetchGenre();
    }

    if(this.trendingResult.hasOwnProperty(searchQuery)) {
      return Promise.resolve(this.trendingResult[searchQuery]);
    }
    return apiService.get<MovieResponseModel>(`/trending/${filters.media_type}/${filters.time_window}`).then(trending => {
      this.trendingResult[searchQuery] = trending.results;
      return trending.results;
    });
  }
}

export const trendingService = TrendingService.getInstance();
