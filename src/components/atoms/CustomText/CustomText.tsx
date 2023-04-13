import React, { ReactNode } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native';

interface CustomTextProps {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  width?: number | string;
  children: ReactNode | undefined;
  textAlign?: 'center' | 'left' | 'right';
  onPress?: () => void;
  numberOfLines?: number;
  style?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({
  fontFamily = 'Roboto-Regular',
  fontSize = 16,
  color = '#000',
  textAlign = 'center',
  children,
  onPress,
  width,
  numberOfLines,
  style,
}) => {
  const styles = StyleSheet.create({
    customText: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
      textAlign: textAlign,
      width: width,
      ...style,
    },
  });

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.customText} numberOfLines={numberOfLines}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }

  return <Text style={styles.customText}>{children}</Text>;
};

export default CustomText;
