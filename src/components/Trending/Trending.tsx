import React, { useEffect } from "react";
import "./Trending.scss";
import Header from "../../shared/Header/Header";
import { Movie } from "../../models/Movie.model";
import { trendingService } from "../../services/TrendingService";
import { MediaType } from "../../enum/media-type.enum";
import { TimeWindow } from "../../enum/time-window.enum";
import MovieCard from "../../shared/MovieCard/MovieCard";
import TrendingFilter from "./TrendingFilter/TrendingFilter";
import { TvModel } from "../../models/Tv.model";

const Trending: React.FC = () => {

  const [trendingMovies, setTrendingMovies] = React.useState<Movie[] | TvModel[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    _callAndSetResults({media_type: MediaType.MOVIE, time_window: TimeWindow.WEEK}).then(() => {
      setIsLoading(false);
    })
  }, []);

  function _onFilterChange(values: {media_type: MediaType, time_window: TimeWindow}) {
    setIsLoading(true);
    _callAndSetResults(values).then(() => {
      setIsLoading(false);
    });
  }

  function _callAndSetResults(filters: {media_type: MediaType, time_window: TimeWindow}) {
    return trendingService.fetchTrendingList(filters).then(res => {
      setTrendingMovies(res);
    })
  };

  return (
    <div className="trending-container">
      <div className="main-container">
        <Header/>
        <div className="movie-container">
          {(trendingMovies as any[]).map((movie, index) => <MovieCard movie={movie} key={index}/>)}
        </div>
      </div>
      <div className="sidebar-container">
        <TrendingFilter onFilterChange={_onFilterChange}/>
      </div>
    </div>
  );
};

export default Trending;

