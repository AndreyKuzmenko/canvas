import React from 'react';
import './Canvas.css';

function Canvas(props) {
  const { classes } = props;
  return (
    <div>
      <h2>Leadership styles</h2>
      <div className="wrapper">
        <div className="title">
          <div className="vertical">Result</div>
        </div>

        <div className="border">1</div>
        <div className="border">2</div>

        <div className="title">
          <div className="vertical">Process</div>
        </div>
        <div className="border">7</div>
        <div className="border">8</div>

        <div className="horizont-title horizont-title-2">Short term</div>
        <div className="horizont-title">Long term</div>
      </div>
    </div>
  );
}

export default Canvas;
