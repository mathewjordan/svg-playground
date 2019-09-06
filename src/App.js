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
        <SVG src={foundational} />
        <SVG src={specialized} />
        <SVG src={leadership} />
        <SVG src={management} />
    </div>
  );
}

export default App;
