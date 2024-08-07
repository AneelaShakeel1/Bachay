import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigators/MyStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addUserToken } from './src/redux/features/auth/authSlice';
import { getUserDetails } from './src/redux/features/auth/authThunks';
import { userDetailsLoading } from './src/redux/features/auth/authSelectors';
import { getProductsList } from './src/redux/features/Main/mainThunks';

export default function App() {
  const loading = useSelector(userDetailsLoading);
  const selectedIdfilter = useSelector(state => state.main.selectedFilter);
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const getUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const parsedToken = JSON.parse(token);
      dispatch(addUserToken(parsedToken));
      try {
        await dispatch(getUserDetails()).unwrap();
        // console.log("Promise", data)
      } catch (error) {
        console.log("wwww",error);
      }
    }
  };
  useEffect(() => {
   
    if (selectedIdfilter !== null) {
      dispatch(getProductsList({ id: selectedIdfilter }))
        .unwrap()
        .then((res) => {
          console.log('product dtaaaaaa id walaaaaaa data loaded successfully', res);
        })
        .catch((err) => {
          console.log('Error loading shopping data', err);
        });
    } else {
     
      dispatch(getProductsList({ id: null})).unwrap()
        .then((res) => {
          // console.log('product........ data loaded successfully', res);
        })
        .catch((err) => {
          console.log('Error loading shopping data', err);
        });
    }
  }, [selectedIdfilter, dispatch]);

  // const getProductData = async () => {
  //   await dispatch(getProductsList()).unwrap();
  // }

  useEffect(() => {
    getUser();
    // getProductData();
  }, []);

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
