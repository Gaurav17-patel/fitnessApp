import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Add_item = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    throw error;
  }
};

export const Get_item = async key => {
  try {
    const key_data = await AsyncStorage.getItem(key);
    return key_data;
  } catch (error) {
    throw error;
  }
};

export const Clear_Storage = async key => {
  await AsyncStorage.clear(key);
};
