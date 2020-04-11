import React, { lazy, Suspense } from 'react';
import './App.scss';
import Loader from "../../shared/Loader/Loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bootstrap from "../Bootstrap/Bootstarp";

const Popular = lazy(() => import("../Popular/Popular"));
const Trending = lazy(() => import("../Trending/Trending"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback = {
          <Loader/>
        }>
          <Switch>
            <Route exact path = {"/popular"} component = {Popular}/>
            <Route exact path = {"/trending"} component = {Trending}/>
            <Route path={"/"} component={Bootstrap} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
