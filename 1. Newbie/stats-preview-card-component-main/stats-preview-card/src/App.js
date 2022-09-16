
import React from 'react';
import './App.css';
import {Header, Information, Stats, Attribution} from "./components";

function App() {
  return (
    <div className="App">
      <div className='container-fluid' id='challange-info'>
        <article id='stats-card'>
          <div id='stats-card_img'>
            <Header />
          </div>
          <div id='stats-card_text'>
            <Information />
            <Stats />
          </div>
        </article>
        <Attribution />
      </div>
    </div>
  );
}

export default App;
