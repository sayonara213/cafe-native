import React from 'react';
import { View } from 'react-native';

import { theme } from '@theme/theme';

interface SpacerProps {
  size: number | string;
  horizontal?: boolean;
  isBorder?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({ horizontal, size, isBorder }) => {
  const defaultValue = 'auto';

  return (
    <View
      style={{
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
        borderBottomWidth: isBorder ? 1 : 0,
        borderBottomColor: theme.colors.borderNotActive,
      }}
    />
  );
};

export default Spacer;
