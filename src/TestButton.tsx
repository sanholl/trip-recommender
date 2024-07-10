import React, { FC, PropsWithChildren, useEffect } from 'react';
import './TestButton.styles.scss';

interface TestButtonProps {
  label: string,
  onClick: () => void
}

const TestButton = (props: TestButtonProps) => {
  useEffect(() => {
    console.log('Button component mounted');
  }, []);

  return (
    <button className="my-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default TestButton