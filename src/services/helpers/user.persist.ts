import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserFromAsyncStorage = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user;
  } catch (error) {
    console.log(error);
  }
};
