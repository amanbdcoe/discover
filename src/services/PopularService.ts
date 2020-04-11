import { apiService } from "./ApiService";

class PopularService {

  static getInstance(): PopularService {
    return new PopularService();
  }

  fetchPopularMovies() {

  }
}

export const popularService = PopularService.getInstance();
