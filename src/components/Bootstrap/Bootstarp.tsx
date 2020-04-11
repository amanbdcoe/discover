import React, { useEffect } from "react";
import Loader from "../../shared/Loader/Loader";
import { genreService } from "../../services/GenreService";
import { useHistory, withRouter } from "react-router";

const Bootstrap: React.FC = () => {

  const history = useHistory();
  useEffect(() => {
    if(!genreService.getGenres().length) {
      genreService.fetchGenre().then(() => {
        history.push("/popular");
      })
    } else {
      history.push("/popular");
    }
  }, []);

  return (
    <Loader/>
  )
};

export default withRouter(Bootstrap);
