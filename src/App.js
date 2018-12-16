import React, { Component } from 'react';
/**
 * packages
 */

import AutoScale from 'react-auto-scale'; //TODO Remove
import { Parallax, Background } from 'react-parallax';
import logo from './mediaAssets/logo.svg';
import logo2 from './mediaAssets/Discord2.png';
import header from './mediaAssets/header2.jpg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './list/List.js';
/**
 * css
 */
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Header-image">
          <div className="unselectable">
            <Parallax blur={0} bgImage={header} bgImageAlt="image" strength={700}>
            <div style={{ height: '500px' }} />
            <div className="Header-text-title">
              <div className="fancy">
                <span>
                  James Ly
                </span>
              </div>
            </div>
            <div className="Header-text-subtext">
              🎓 2018 Graduate of RyersonU<br />
              👏 Filler text
            </div>
            </Parallax>

          </div>
        </div>
        docstart
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <p>
            James Ly's website. First Commit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <List />
      </div>
    );
  }
}

export default App;
