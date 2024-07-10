import React from 'react';
import './TestButton.styles.scss';
type TestButtonProps = {
    label: string;
    onClick: () => void;
};
declare const TestButton: (props: TestButtonProps) => React.JSX.Element;
export default TestButton;
