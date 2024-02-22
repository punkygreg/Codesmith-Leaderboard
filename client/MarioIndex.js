import React from 'react';
import { render } from 'react-dom';
// import MarioKart from './components/MarioKart.jsx';
import { BrowserRouter } from 'react-router-dom';

// uncomment so that webpack can bundle styles
import styles from './styles.scss'
import MarioKart from './components/MarioKart.jsx';

render(
<BrowserRouter>
  <MarioKart />
</BrowserRouter>,

  document.getElementById('mariokart')
);