import React, { FC, PropsWithChildren, useEffect } from 'react';
import './TestButton.styles.scss';
import { TestButtonProps } from 'trip-recommender';

const TestButton = ({label, onClick}: TestButtonProps) => {
  useEffect(() => {
    console.log('Button component mounted');
  }, []);

  return (
    <button className="my-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default TestButton