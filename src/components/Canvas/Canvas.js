import React from 'react';
import './Canvas.css';

import imgProducer from "../../images/producer.png" 
import imgAdministrator from "../../images/administrator.png" 
import imgEnprepreneur from "../../images/enprepreneur.png" 
import imgIntegrator from "../../images/integrator.png" 

function Canvas(props) {
  const { classes } = props;
  return (
    <div>



    <h2>Leadership styles</h2>
    <div className="wrapper">
        <div className="title">
            <div className="vertical">Result</div>
        </div>

        <div className="border">
            <div className="sub-title">Producer</div>
            <img src={imgProducer}/>
        </div>
        <div className="border">
            <div className="sub-title">Entrepreneur</div>
            <img src={imgEnprepreneur}/>
        </div>

        <div className="title">
            <div className="vertical">Process</div>
        </div>
        <div className="border">
            
            <div className="sub-title">Administrator</div>
            <img src={imgAdministrator}/>
        </div>
        <div className="border">
        <div className="sub-title">Integrator</div>
            <img src={imgIntegrator}/>
            
        </div>

        <div className="horizont-title horizont-title-2">Short term</div>
        <div className="horizont-title">Long term</div>
    </div>




</div>
  );
}

export default Canvas;
