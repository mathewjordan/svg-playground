import React from 'react';
import SVG from 'react-inlinesvg';
import './css/main.css'

import foundational from './media/svg/competency/competency_foundational.svg';
import specialized from './media/svg/competency/competency_specialized.svg';
import leadership from './media/svg/competency/competency_leadership.svg';
import management from './media/svg/competency/competency_management.svg';

function App() {
  return (
    <div className="App">
        <SVG class="utk-svg utk-svg-animated utk-svg-animated-burst"
             src={foundational} />
        <SVG class="utk-svg utk-svg-animated utk-svg-animated-burst"
             src={specialized} />
        <SVG class="utk-svg utk-svg-animated utk-svg-animated-burst"
             src={leadership} />
        <SVG class="utk-svg utk-svg-animated utk-svg-animated-burst"
             src={management} />
    </div>
  );
}

export default App;
