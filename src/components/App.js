import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './organisms/Header';
import WeatherPage from './template/WeatherPage';
import MinMaxPage from './template/MinMaxPage';

function App() {
  /* Current weather state on top level component so it doesn't
   *  reset when changing routes and re-rendering the WeatherPage component
   */
  const [currentValues, setCurrentValues] = useState({
    city: 'Selecione uma cidade',
    country: '',
    temp: 0,
    min: 0,
    max: 0,
    unit: 'C',
    icon: '13d',
    inactive: true,
  });

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
          <WeatherPage currentValues={currentValues} setCurrentValues={setCurrentValues} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
