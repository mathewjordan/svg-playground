import React from 'react';
import SVG from 'react-inlinesvg';
import './css/main.css'

import SVGSource from './media/svg/competency/competency_specialized.svg';

function App() {
  return (
    <div className="App">
        <SVG src={SVGSource} />
    </div>
  );
}

export default App;
