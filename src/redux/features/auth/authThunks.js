import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiManager from '../../../api/ApiManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addUserToken } from './authSlice';
// ! Login User
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { signal }) => {
    const { data, setModalVisible, setButtonLoading } = credentials;
    try {
      const res = await ApiManager.post('auth/login', data, { signal });
      if (res.data.password !== undefined && res.data.password !== null) {
        await AsyncStorage.setItem(
          'userPassword',
          JSON.stringify(res.data.password),
        );
      }
      const msg = res.data.message;
      return msg;
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Register User
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { signal }) => {
    const { data, setModalVisible, setButtonLoading } = credentials;
    try {
      const res = await ApiManager.post('auth/register', data, { signal });
      return res.data;
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Get User Details
export const getUserDetails = createAsyncThunk(
  'auth/user',
  async (_, { getState }) => {
    const token = getState().authReducer.userToken;
    if (!token) {
      // Handle the case where the token is not available
      throw new Error('User token not available');
    }
    try {
      const res = await ApiManager.get('auth/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('USER DETAILS API', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF USER DETAILS', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Logout User
export const logout = createAsyncThunk(
  'auth/logout',
  async (data, { getState }) => {
    const { authReducer } = getState();
    const token = authReducer.userToken;
    const { setModalVisible } = data;
    try {
      const res = await ApiManager.post(
        'auth/logout',
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      );
      await AsyncStorage.removeItem('token');
      authReducer.userToken = null;
      return res.data;
    } catch (error) {
      setModalVisible(true);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Profile Update
export const profileUpdate = createAsyncThunk(
  'auth/profile/update-user',
  async (
    { f_name, l_name, gender, date_of_birth, setModalVisible },
    { getState, signal },
  ) => {
    const token = getState().authReducer.userToken;
    try {
      const profileData = {
        f_name: f_name,
        l_name: l_name,
        date_of_birth: date_of_birth,
        gender: gender,
      };

      const res = await ApiManager.post('auth/profile/update-user', profileData, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });

      console.log('API Response:', res);

      return res.data;
    } catch (error) {
      if (error.response) {
        setModalVisible(true);
        console.error('API Error Response:', error.response);
        throw new Error(error.response?.data?.message || 'Unknown API error');
      } else {
        setModalVisible(true);
        console.error('API Error:', error);
        throw new Error(error.message || 'Unknown error');
      }
    }
  },
);

// ! Change Password
export const changePassword = createAsyncThunk(
  'profile/change-password',
  async (
    {
      current_password,
      new_password,
      new_password_confirmation,
      setModalVisible,
      setButtonLoading,
    },
    { getState, signal },
  ) => {
    const token = getState().authReducer.userToken;
    try {
      const passwordData = {
        current_password: current_password,
        new_password: new_password,
        new_password_confirmation: new_password_confirmation,
      };
      const res = await ApiManager.put(
        'profile/change-password',
        passwordData,
        {
          headers: { Authorization: `Bearer ${token}` },
          signal,
        },
      );
      return res.data;
    } catch (error) {
      setButtonLoading(false);
      if (error.response) {
        setModalVisible(true);
        throw new Error(error.response?.data?.message);
      } else {
        setModalVisible(true);
        throw new Error(error.message);
      }
    }
  },
);

// ! Change Email
// export const changeEmail = createAsyncThunk(
//   'profile/change-email',
//   async (
//     { new_email, new_email_confirmation, setModalVisible },
//     { getState, signal },
//   ) => {
//     const token = getState().authReducer.userToken;
//     try {
//       const emailData = {
//         new_email: new_email,
//         new_email_confirmation: new_email_confirmation,
//       };
//       const res = await ApiManager.put('profile/change-email', emailData, {
//         headers: { Authorization: `Bearer ${token}` },
//         signal,
//       });
//       return res.data;
//     } catch (error) {
//       if (error.response) {
//         setModalVisible(true);
//         throw new Error(error.response?.data?.message);
//       } else {
//         setModalVisible(true);
//         throw new Error(error.message);
//       }
//     }
//   },
// );

export const checkEmail = createAsyncThunk(
  'auth/check-email',
  async (credentials, { signal }) => {
    const { data, temporary_token, setModalVisible, setButtonLoading } =
      credentials;
    try {
      if (!temporary_token) {
        throw new Error('The temporary token field is required.');
      }
      const requestData = { ...data, temporary_token };
      const res = await ApiManager.post('auth/check-email', requestData, {
        signal,
      });
      return res.data;
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);
      if (error.message === 'The temporary token field is required.') {
        throw error;
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Verify Email OTP
export const verifyEmailOtp = createAsyncThunk(
  'auth/verify-email',
  async (
    { temporary_token, email, token, setModalVisible, setButtonLoading },
    { getState },
  ) => {
    try {
      if (!temporary_token) {
        throw new Error('The temporary token field is required.');
      }
      const res = await ApiManager.post('auth/verify-email', {
        temporary_token,
        email,
        token,
      });
      return res.data;
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Resend Email OTP
export const resendEmailOtp = createAsyncThunk(
  'auth/resend-otp-check-email',
  async ({ temporary_token, email, setModalVisible }, { getState }) => {
    try {
      if (!temporary_token) {
        throw new Error('The temporary token field is required.');
      }
      const res = await ApiManager.post('auth/resend-otp-check-email', {
        temporary_token,
        email,
      });
      return res.data;
    } catch (error) {
      setModalVisible(true);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Check Email For Password
export const checkEmailPassword = createAsyncThunk(
  'auth/forgot-password',
  async (credentials, { signal }) => {
    const { data, setModalVisible, setButtonLoading } = credentials;
    try {
      const res = await ApiManager.post('auth/forgot-password', data, { signal });
      return res.data;
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Verify Password OTP
export const verifyPasswordOtp = createAsyncThunk(
  'auth/verify-otp',
  async (credentials, { signal }) => {
    const { identity, otp, setModalVisible, setButtonLoading } = credentials;
    try {
      if (!identity) {
        throw new Error('The email field is required.');
      }
      const res = await ApiManager.post(
        'auth/verify-otp',
        { identity, otp },
        { signal },
      );
      return res.data;
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// // ! Verify Code
// export const verifyCode = createAsyncThunk(
//   'auth/code',
//   async (credentials, { signal }) => {
//     const { code, password, setModalVisible, setButtonLoading } = credentials;
//     console.log("lllllllllllllllllllllllll", credentials);
//     console.log("lllllllllllllllllllllffffllll", password);

//     try {
//       if (!code) {
//         throw new Error('The code field is required.');
//       }
//       const res = await ApiManager.post('auth/code', { code, password }, { signal },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
//       const token = await AsyncStorage.getItem('token');
//       console.log('tokennnnnn', token);
//       console.log('tokennnnnn', res.data);
//       return res.data.token;
//     } catch (error) {
//       setButtonLoading(false);
//       setModalVisible(true);
//       if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
//         const errorMessage = error.response.data.errors[0].message;
//         throw new Error(errorMessage);
//       } else {
//         throw new Error(error.message);
//       }
//     }
//   },
// );
export const verifyCode = createAsyncThunk(
  'auth/code',
  async (credentials, { signal }) => {
    const { code, password, setModalVisible, setButtonLoading } = credentials;

    try {
      if (!code) {
        throw new Error('The code field is required.');
      }

      const res = await ApiManager.post(
        'auth/code',
        { code, password },
        { signal },
      );
      if (res.data && res.data.token) {
        await AsyncStorage.setItem('token', JSON.stringify(res.data.token));
        console.log('tokennnnnn', res.data.token);

        return res.data.token;
      } else {
        throw new Error('Token not found in the API response.');
      }
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);

      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Reset Password
export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async (credentials, { signal }) => {
    const {
      identity,
      otp,
      password,
      confirm_password,
      setModalVisible,
      setButtonLoading,
    } = credentials;
    try {
      if (!identity) {
        throw new Error('The email field is required.');
      }
      const res = await ApiManager.put(
        'auth/reset-password',
        { identity, otp, password, confirm_password },
        { signal },
      );
      console.log('API Response:', res.data);
      return res.data;
    } catch (error) {
      setButtonLoading(false);
      setModalVisible(true);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.length > 0
      ) {
        const errorMessage = error.response.data.errors[0].message;
        throw new Error(errorMessage);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Change Avatar
export const changeAvatar = createAsyncThunk(
  'customer/change-avatar',
  async ({ avatar }, { getState }) => {
    const token = getState().authReducer.userToken;
    console.log('avaaaaaa', avatar);
    try {
      const res = await ApiManager.post('customer/change-avatar', avatar, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response);
      } else {
        setModalVisible(true);
        throw new Error(error.message);
      }
    }
  },
);

// ! Delete Account
export const deleteAccount = createAsyncThunk(
  'customer/account-delete',
  async ({ id }, { getState, signal }) => {
    console.log('arhi h yhn ', id);
    const { authReducer } = getState();
    const token = getState().authReducer.userToken;
    console.log('Token', token);
    try {
      const res = await ApiManager.get(`customer/account-delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      await AsyncStorage.removeItem('token');
      authReducer.userToken = null;
      authReducer.userDetails = null;
      console.log('account delete hogya', res?.data?.message);
      return res.data;
    } catch (error) {
      console.log('Delete Account errror', error?.res?.data?.message);
      console.log('Delete Account errror', error);

      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Address List
export const addressList = createAsyncThunk(
  'customer/address/list',
  async (_, { getState }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get('customer/address/list', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Address List API', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF ADDRESS DETAILSmmm', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Add Address
export const addAddress = createAsyncThunk(
  'customer/add-address',
  async (addressData, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    const { data, setModalVisible } = addressData;
    console.log('add address-------', data);
    try {
      const res = await ApiManager.post('customer/add-address', data, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      return res.data; // Return the success message
    } catch (error) {
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        setModalVisible(true);
        throw new Error(error.message);
      }
    }
  },
);

// ! Update Address
export const updateAddress = createAsyncThunk(
  'customer/update-address',
  async ({ data, id, setModalVisible }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.put(`customer/update-address/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      return res.data; // Return the success message
    } catch (error) {
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        setModalVisible(true);
        throw new Error(error.message);
      }
    }
  },
);

export const deleteAddress = createAsyncThunk(
  'customer/delete-address',
  async ({ id }, { getState, signal }) => {
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.delete(
        `customer/delete-address/${id}`,
        {
          signal,
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log('responseeeeeeeeeeeee delete address', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

// ! Child List
export const childList = createAsyncThunk('child/list', async (_, { getState }) => {
  const token = getState().authReducer.userToken;
  console.log('gggggggg', token);
  try {
    console.log('gggggggkjewdhhwdg', token);
    const res = await ApiManager.get('/child/list', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Child List API', res?.data);
    return res?.data;
  } catch (error) {
    console.log('ERROR OF CHILd DETAILS mm', error);
    if (error.response) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error(error.message);
    }
  }
});

// ! Select Child List
export const selectChildList = createAsyncThunk(
  'child/detail',
  async ({ id }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get(`child/detail/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      console.log('single child dataaaaaaa', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF SINGLE CHILD DETAILS', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Add Child
export const addChild = createAsyncThunk(
  'child/add-child',
  async (credentials, { getState, signal }) => {
    const { data } = credentials;
    const token = getState().authReducer.userToken;
    console.log(`Bearer ${token}`);
    try {
      const res = await ApiManager.post('child/add-child', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        signal,
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Update Address
export const updateChild = createAsyncThunk(
  'child/update',
  async ({ id, data }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    console.log('datwwwwwwwwwwwwwwa', data);
    console.log('datwwwwwwwwwwwwwwa', id);

    try {
      const res = await ApiManager.post(`child/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-HTTP-Method-Override': 'PUT',
        },
        signal,
      });
      // console.log('Child List APIsssssssssss', res.data);
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

export const deleteChild = createAsyncThunk(
  'child/delete',
  async ({ id }, { getState, signal }) => {
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.delete(`child/delete/${id}`, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('responseeeeeeeeeeeee delete child', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

// ! Add VaccineStatus
export const vaccineStatus = createAsyncThunk(
  'child/vaccination/add',
  async ({ id, data }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    console.log('vaccine data', data);
    console.log('vaccine ID', id);

    try {
      const res = await ApiManager.post(`child/vaccination/add/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        signal,
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Select Vaccine Data
export const selectVaccine = createAsyncThunk(
  'child/vaccination_submission',
  async ({ id }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get(`child/vaccination_submission/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      console.log('single vaccine dataaaaaaa', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF SINGLE VACCINE DETAILS', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// Get Quiz Categories
export const quizCategoryList = createAsyncThunk(
  'auth/quiz/category',
  async (_, { getState }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get('auth/quiz/category', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('QUIZ CATEGORIES API', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF QUIZ CATEGORIES', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Select Category Quiz
export const selectCategoryQuiz = createAsyncThunk(
  'auth/quiz/category/single',
  async ({ id }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get(`auth/quiz/category/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      console.log('single category quiz dataaaaaaa', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF SINGLE Category Quiz', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Select Category Quiz
export const selectCategoryQuizSingle = createAsyncThunk(
  'auth/quiz/category/single/quiz',
  async ({ id }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get(`auth/quiz/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      console.log('category quiz single dataaaaaaa', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF Category single Quiz', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);
