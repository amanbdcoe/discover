import React, { useEffect } from "react";
import "./Popular.scss";
import Header from "../../shared/Header/Header";
import { popularService } from "../../services/PopularService";
import { Movie } from "../../models/Movie.model";
import MovieCard from "../../shared/MovieCard/MovieCard";
import Loader from "../../shared/Loader/Loader";
import { Spin } from "antd";
import Filter from "../../shared/Filter/Filter";

const Popular: React.FC = () => {

  const [popularMovies, setPopularMovies] = React.useState<Movie[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isFetchingPaginatedResult, setFetchingPaginatedResult] = React.useState<boolean>(false);
  const [isAllResultsFetched, setAllResultsFetched] = React.useState<boolean>(false);

  useEffect(() => {
    _callAndSetResults().then(() => {
      setIsLoading(false);
    });

    return () => {
      popularService.resetFetchedPages();
    }
  }, []);

  function _loadMore() {
      setFetchingPaginatedResult(true);
      _callAndSetResults().then(() => {
        setFetchingPaginatedResult(false);
      })
  }

  function _callAndSetResults() {
    return popularService.fetchPopularMovies({"sort_by": "popularity.desc"}).then((res) => {
      if(res.length === 0) {
        setAllResultsFetched(true);
      }
      setPopularMovies((prevValue) => {
        return [...prevValue, ...res];
      });
    })
  }

  return (
    <div className="popular-container">
      {isLoading ? <Loader/> : <div>
        <div className="main-container">
          <Header/>
          <div className="movie-container">
            {popularMovies.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
          </div>
          <div className="load-more-button-container">
            {isAllResultsFetched ? <p>You have reached the end</p>: ""}
            {!isAllResultsFetched && isFetchingPaginatedResult ? <Spin/> : <button className="load-more-button" onClick={_loadMore}>Load More</button>}
          </div>
        </div>
        <div className="sidebar-container">
          <Filter/>
        </div>
      </div>}
    </div>
  );
};

export default Popular;

