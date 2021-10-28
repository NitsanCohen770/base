import React from 'react';
import { Ul } from './ul';
import { BrowserRouter as Router } from 'react-router-dom';

export const BasicUl = () => (
  <Router>
    <Ul links={['Collections', 'Men', 'Women', 'About', 'Contact']} />
  </Router>
);
