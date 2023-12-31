import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListPasswordsProps } from '~/screens/Home/Model';

const useStorage = () => {
  const getItem = async (id: string) => {
    try {
      const listPasswords: any = await AsyncStorage.getItem(id);

      return JSON.parse(listPasswords) || [];
    } catch (error) {
      console.log('erro', error);
      return [];
    }
  };

  const saveItem = async (id: string, item: ListPasswordsProps) => {
    try {
      let passwords = await getItem(id);

      passwords.push(item);

      await AsyncStorage.setItem(id, JSON.stringify(passwords));
    } catch (error) {
      console.log('erro', error);
    }
  };

  const removeItem = async (id: string, item: string) => {
    try {
      let passwords = await getItem(id);

      let myPasswords = passwords.filter((el: ListPasswordsProps) => {
        return el.password !== item;
      });

      await AsyncStorage.setItem(id, JSON.stringify(myPasswords));

      return myPasswords;
    } catch (error) {
      console.log('erro', error);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
