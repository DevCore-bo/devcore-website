// src/components/molecules/FeatureRow/FeatureRow.jsx
import React from 'react';
import Icon from '../Icon/Icon';
import './Features.css';

const Features = ({ features }) => {
  return (
    <div className="feature-row">
      {features.map((feature, index) => (
        <div key={index} className="feature-item-row">
          <div className="feature-icon-wrapper">
            <Icon name={feature.icon} className="feature-icon" />
          </div>
          <span className="feature-text">{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Features;