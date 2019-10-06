import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './organisms/Header';
import WeatherPage from './template/WeatherPage';
import MinMaxPage from './template/MinMaxPage';

function App() {
  return (
    <Router>
      {/* Header Component always visible */}
      <Header />
      <Switch>
        <Route path="/minmax">
          {/* /minmax route displays the maximum and minimum temperatures seen through Redux */}
          <MinMaxPage />
        </Route>
        <Route path="/">
          {/* / Root route shows the Weather Forecast to 3 different cities */}
          <WeatherPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
