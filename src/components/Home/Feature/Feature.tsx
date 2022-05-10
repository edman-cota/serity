import React from 'react';
import "./Feature.scss";

interface FeatureProps {
    title?: string, 
    text?: string,
}

const Feature = ({title, text}: FeatureProps): JSX.Element => {
  return (
      <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature