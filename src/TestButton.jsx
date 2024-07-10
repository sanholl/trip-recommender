import React, { useEffect } from 'react';
import './TestButton.styles.scss';

export const TestButton = ({ label, onClick }) => {
  useEffect(() => {
    console.log('Button component mounted');
  }, []);

  return (
    <button className="my-button" onClick={onClick}>
      {label}
    </button>
  );
};