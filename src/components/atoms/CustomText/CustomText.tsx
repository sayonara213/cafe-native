import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface CustomTextProps {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  children: ReactNode | undefined;
}

const CustomText: React.FC<CustomTextProps> = ({
  fontFamily = 'Roboto-Regular',
  fontSize = 16,
  color = '#000',
  children,
}) => {
  const styles = StyleSheet.create({
    customText: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
    },
  });

  return <Text style={styles.customText}>{children}</Text>;
};

export default CustomText;
