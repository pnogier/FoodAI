import React from 'react';
import * as SC from './button.style';

type ButtonProps = {
  children?: React.ReactNode;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  onPress: () => void;
};

const Button = ({
  children,
  onPress,
  margin,
  padding,
  backgroundColor,
}: ButtonProps) => {
  return (
    <SC.Button
      onPress={onPress}
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </SC.Button>
  );
};

export default Button;
