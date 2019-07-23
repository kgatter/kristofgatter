import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import ScrollToTop from 'react-router-scroll-top';
import {LINKS} from "./Links";

import NavBar from "./Components/NavBar";
import MainPage from "./Pages/MainPage";
import WorkPage from "./Pages/WorkPage";
import MentoringPage from "./Pages/MentoringPage";


function App() {

  var history = createBrowserHistory();

  history.listen(location => {
      // Use setTimeout to make sure this runs after React Router's own listener
      setTimeout(() => {
          // Keep default behavior of restoring scroll position when user:
          // - clicked back button
          // - clicked on a link that programmatically calls `history.goBack()`
          // - manually changed the URL in the address bar (here we might want
          // to scroll to top, but we can't differentiate it from the others)
          if (location.action === 'POP') {
              return;
          }
          // In all other cases, scroll to top
          window.scrollTo(0, 0);
      });
  });

  return (
    <div className="App">
      <Suspense fallback="loading">
        <Router history={history}>
          <NavBar />
          <ScrollToTop>
            <Switch>
              <Route exact path={LINKS.ROOT} component={MainPage} />
              <Route exact path={LINKS.WORK} component={WorkPage} />
              <Route exact path={LINKS.MENTORING} component={MentoringPage} />
            </Switch>
          </ScrollToTop>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
