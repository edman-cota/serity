import React from "react";
import "./CTA.scss";

const CTA = (): JSX.Element => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Try all features for free with unlimited for 30 days</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
