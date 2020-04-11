import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Provider } from "mobx-react";
import Loader from "../../shared/Loader/Loader";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { RootStore } from "../../store/RootStore";

const Popular = lazy(() => import("../Popular/Popular"));
const Trending = lazy(() => import("../Trending/Trending"));

function App() {
  return (
    <div className="App">
      <Provider store={RootStore.getInstance()}>
        <BrowserRouter>
          <Suspense fallback={
            <Loader/>
          }>
            <Switch>
              <Route exact path={"/popular"} component={Popular} />
              <Route exact path={"/trending"} component={Trending}/>
              <Route render={() => <Redirect to={"/popular"}/>} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
