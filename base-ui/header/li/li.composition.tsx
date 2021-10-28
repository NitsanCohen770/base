import React from 'react';
import { Li } from './li';
import { BrowserRouter as Router } from 'react-router-dom';

export const BasicLi = () => (
  <Router>
    <Li text="hello from Li" />
  </Router>
);
