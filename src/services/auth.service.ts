import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const persistedData = await AsyncStorage.getItem('persist:root');
    const persistedDataObj = JSON.parse(persistedData!);
    const userData = JSON.parse(persistedDataObj.user);
    const token = userData.access_token;
    return token;
  } catch (error) {
    console.log(error);
  }
};
