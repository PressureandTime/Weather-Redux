import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherLIst from '../containers/WeatherLIst';

export default class App extends Component {
  render() {
    return (
      <div>

      <SearchBar/>
      <WeatherLIst/>

      </div>
    );
  }
}
