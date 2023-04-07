import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '@components/atoms/CustomText/CustomText';
import CustomButton from './../../components/atoms/CustomButton/CustomButton';
import CustomInput from './../../components/atoms/CustomInput/CustomInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICON_MAP } from '@assets/icons';

const Auth: React.FC = () => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
  });

  const [text, setText] = useState<string>('');

  return (
    <SafeAreaView style={style.container}>
      <CustomText fontSize={20}>123</CustomText>
      <CustomButton type={'default'} onPress={() => console.log('123')}>
        SUBMIT
      </CustomButton>
      <CustomInput
        value={text}
        onChangeText={setText}
        placeholder="Email"
        type="text"
        isAnimated={true}
        icon={ICON_MAP.hide}
      />
    </SafeAreaView>
  );
};

export default Auth;
