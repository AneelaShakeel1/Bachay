import {createSlice} from '@reduxjs/toolkit';
import {
  login,
  logout,
  getUserDetails,
  register,
  profileUpdate,
  changePassword,
  deleteAccount,
  changeAvatar,
  checkEmail,
  verifyEmailOtp,
  resendEmailOtp,
  checkEmailPassword,
  verifyPasswordOtp,
  resetPassword,
  addAddress,
  addressList,
  addChild,
  vaccineStatus,
  selectVaccine,
  childList,
  selectChildList,
  deleteAddress,
  deleteChild,
  quizCategoryList,
  selectCategoryQuiz,
  selectCategoryQuizSingle,
  verifyCode,
} from './authThunks';

const initialState = {
  userDetails: null,
  userUpdateData: null,
  userToken: null,
  auth_loading: false,
  error: null,
  user_details_loading: false,
  addressDetails: null,
  editAddress: null,
  childDetails: null,
  singleChildDetails: null,
  singleVaccineDetails: null,
  editChild: null,
  quizCategories: null,
  singleCatQuizDetails: null,
  singleCatQuizSingle: null,
  userPassword: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    emptyAuthState: () => {
      return initialState;
    },
    addUserDetails: (state, action) => {
      console.log('text to update', action.payload.userDetails);
      state.userDetails = action.payload;
    },
    addUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    addUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
    updateUserBio: (state, action) => {
      // console.log("text to update", action.payload.bioText)
      state.userDetails = {
        ...state.userDetails,
        bio: action.payload.bioText,
      };
    },
    UpdateAddressData: (state, action) => {
      state.editAddress = action.payload;
    },
    UpdateChildData: (state, action) => {
      state.editChild = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },

  extraReducers: builder => {
    // ! LOGIN
    builder.addCase(login.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.userToken = action.payload.token;
      state.auth_loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Register
    builder.addCase(register.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! LOGOUT
    builder.addCase(logout.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.userDetails = null;
      state.userToken = null;
      state.auth_loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Get User Details
    builder.addCase(getUserDetails.pending, state => {
      state.user_details_loading = true;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.userDetails = action.payload.user;
      state.user_details_loading = false;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.user_details_loading = false;
    });

    // ! Profile Update
    builder.addCase(profileUpdate.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(profileUpdate.fulfilled, (state, action) => {
      state.userUpdateData = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(profileUpdate.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Verify Email
    builder.addCase(checkEmail.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(checkEmail.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(checkEmail.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Verify Email OTP
    builder.addCase(verifyEmailOtp.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(verifyEmailOtp.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(verifyEmailOtp.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Resend Email OTP
    builder.addCase(resendEmailOtp.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(resendEmailOtp.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(resendEmailOtp.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Check Email For Password
    builder.addCase(checkEmailPassword.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(checkEmailPassword.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(checkEmailPassword.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Verify Password OTP
    builder.addCase(verifyPasswordOtp.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(verifyPasswordOtp.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(verifyPasswordOtp.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });
    // ! Verify Code
    builder.addCase(verifyCode.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(verifyCode.fulfilled, (state, action) => {
      state.userDetails = action.payload.token;
      state.userPassword = action.payload.password;
      state.auth_loading = false;
    });

    builder.addCase(verifyCode.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Reset Password
    builder.addCase(resetPassword.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Password Update
    builder.addCase(changePassword.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.auth_loading = false;
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Avatar Change
    builder.addCase(changeAvatar.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.auth_loading = false;
    });
    builder.addCase(changeAvatar.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! FORGOT PASSWORD
    // builder.addCase(forgotPassword.pending, (state) => {
    //     state.auth_loading = true
    // })
    // builder.addCase(forgotPassword.fulfilled, (state, action) => {
    //     state.auth_loading = false;
    // })
    // builder.addCase(forgotPassword.rejected, (state, action) => {
    //     state.error = action.error.message;
    //     state.auth_loading = false
    // })

    // ! DELETE ACCOUNT
    builder.addCase(deleteAccount.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(deleteAccount.fulfilled, (state, action) => {
      state.auth_loading = false;
    });
    builder.addCase(deleteAccount.rejected, (state, action) => {
      state.error = action.error.message;
      state.auth_loading = false;
    });

    // ! Delete Address
    builder.addCase(deleteAddress.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      state.auth_loading = false;
      state.addressDetails = action.payload;
    });
    builder.addCase(deleteAddress.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Get Address List
    builder.addCase(addressList.fulfilled, (state, action) => {
      state.addressDetails = action.payload;
    });
    builder.addCase(addressList.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Add Address
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.addressDetails = action.payload;
    });
    builder.addCase(addAddress.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Get Child List
    builder.addCase(childList.fulfilled, (state, action) => {
      state.childDetails = action.payload;
    });
    builder.addCase(childList.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Get Single Child List
    builder.addCase(selectChildList.fulfilled, (state, action) => {
      state.singleChildDetails = action.payload;
    });
    builder.addCase(selectChildList.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Add Child
    builder.addCase(addChild.fulfilled, (state, action) => {
      state.childDetails = action.payload;
    });
    builder.addCase(addChild.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Delete Child
    builder.addCase(deleteChild.pending, state => {
      state.auth_loading = true;
    });
    builder.addCase(deleteChild.fulfilled, (state, action) => {
      state.auth_loading = false;
      state.childDetails = action.payload;
    });
    builder.addCase(deleteChild.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Add VaccineStatus
    builder.addCase(vaccineStatus.fulfilled, (state, action) => {
      state.childDetails = action.payload;
    });
    builder.addCase(vaccineStatus.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Get Single Vaccine List
    builder.addCase(selectVaccine.fulfilled, (state, action) => {
      state.singleVaccineDetails = action.payload;
    });
    builder.addCase(selectVaccine.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! Get Quiz Categories
    builder.addCase(quizCategoryList.fulfilled, (state, action) => {
      state.quizCategories = action.payload;
    });
    builder.addCase(quizCategoryList.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! SELECTED CATEGORY QUIZ
    builder.addCase(selectCategoryQuiz.fulfilled, (state, action) => {
      state.singleCatQuizDetails = action.payload;
    });
    builder.addCase(selectCategoryQuiz.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // ! SELECTED CATEGORY QUIZ SINGLE
    builder.addCase(selectCategoryQuizSingle.fulfilled, (state, action) => {
      state.singleCatQuizSingle = action.payload;
    });
    builder.addCase(selectCategoryQuizSingle.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const {
  setPassword,
  addUserDetails,
  addUserToken,
  emptyAuthState,
  updateUserBio,
  UpdateAddressData,
  UpdateChildData,
  addUserPassword,
} = authSlice.actions;

export default authSlice.reducer;
