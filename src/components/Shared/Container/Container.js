import React from 'react';
import './Container.css';
import 'typeface-roboto';

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;
