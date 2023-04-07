import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  size: number | string;
  horizontal?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({ horizontal, size }) => {
  const defaultValue = 'auto';

  return (
    <View
      style={{
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
      }}
    />
  );
};

export default Spacer;
