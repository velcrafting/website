// IconWrapper.js
import React from 'react';

const IconWrapper = ({ Icon, color = 'currentColor', className = '', ...props }) => {
  return <Icon className={`text-${color} ${className}`} {...props} />;
};

export default IconWrapper;
