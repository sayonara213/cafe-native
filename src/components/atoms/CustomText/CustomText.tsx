import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomTextProps {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  width?: number | string;
  children: ReactNode | undefined;
  textAlign?: 'center' | 'left' | 'right';
  onPress?: () => void;
}

const CustomText: React.FC<CustomTextProps> = ({
  fontFamily = 'Roboto-Regular',
  fontSize = 16,
  color = '#000',
  textAlign = 'center',
  children,
  onPress,
  width,
}) => {
  const styles = StyleSheet.create({
    customText: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
      textAlign: textAlign,
      width: width,
    },
  });

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.customText}>{children}</Text>
      </TouchableOpacity>
    );
  }

  return <Text style={styles.customText}>{children}</Text>;
};

export default CustomText;
