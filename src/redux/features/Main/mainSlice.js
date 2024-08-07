import { createSlice } from '@reduxjs/toolkit';
import {
  getCartData,
  getProductsList,
  getShoppingData,
  getCategoriesPromo,
  getAllCategories,
  deleteCartItem,
  removeAllCart,
  checkoutProduct,
  getProductDetails,
  getOrderHistoryDetails,
  childrenList,
  addChildren,
  updateChildren,
  questionList,
  addQuestion,
  addAnswer,
  getMainBannerData,
  getMainSectionBannerData,
  getFlashDealsData,
  getSingleFlashDeal,
  getOrderHistoryDetailsID,
  orderPlaced,
  CustomPageScreen,
  getSubCategories
} from './mainThunks';

const initialState = {
  shoppingData: null,
  newPromoCatData: null,
  newCatData: null,
  allCatData: null,
  newBannerData: null,
  newSectionBannerData: null,
  newFlashDealsData: null,
  singleFlashDealsData: null,
  productslist: null,
  mainStatus: 'idle',
  shoppingDataLoading: false,
  cartDataLoading: false,
  error: null,
  shoppingError: null,
  cartData: null,
  cartError: null,
  hasMoreData: false,
  checkoutProductDetail: null,
  productDetails: null,
  AddtoCartProduct: null,
  orderHistoryDetails: null,
  orderDetailsID: null,
  childrenDetails: null,
  questionDetails: null,
  editChildren: null,
  selectedId: null,
  customData: null,
  selectedFilter: null,
  subCatData: null
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    decreaseProductQuantity: (state, action) => {
      state.cartData[action.payload] = {
        ...state.cartData[action.payload],
        quantity:
          state.cartData[action.payload].quantity > 1
            ? (state.cartData[action.payload].quantity -= 1)
            : state.cartData[action.payload].quantity,
      };
    },
    increaseProductQuantity: (state, action) => {
      state.cartData[action.payload] = {
        ...state.cartData[action.payload],
        quantity: (state.cartData[action.payload].quantity += 1),
      };
    },
    UpdateChildrenData: (state, action) => {
      state.editChildren = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getProductsList.pending, (state, action) => {
      state.mainStatus = 'loading';
    });
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      console.log('Fulfilled Action Payload:', action.payload);
      state.mainStatus = 'succeeded';
      state.productslist = action.payload;
    });
    builder.addCase(getProductsList.rejected, (state, action) => {
      state.mainStatus = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(getShoppingData.pending, (state, action) => {
      state.shoppingDataLoading = true;
    });
    builder.addCase(getShoppingData.fulfilled, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingData = action.payload;
    });
    builder.addCase(getShoppingData.rejected, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingError = action.error.message;
    });

    builder.addCase(getCategoriesPromo.pending, (state, action) => {
      state.shoppingDataLoading = true;
    });
    builder.addCase(getCategoriesPromo.fulfilled, (state, action) => {
      state.shoppingDataLoading = false;
      state.newPromoCatData = action.payload;
    });
    builder.addCase(getCategoriesPromo.rejected, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingError = action.error.message;
    });

    builder.addCase(getAllCategories.pending, (state, action) => {
      state.shoppingDataLoading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.shoppingDataLoading = false;
      state.allCatData = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingError = action.error.message;
    });

    builder.addCase(getMainBannerData.pending, (state, action) => {
      state.shoppingDataLoading = true;
    });
    builder.addCase(getMainBannerData.fulfilled, (state, action) => {
      state.shoppingDataLoading = false;
      state.newBannerData = action.payload;
    });
    builder.addCase(getMainBannerData.rejected, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingError = action.error.message;
    });

    builder.addCase(getMainSectionBannerData.pending, (state, action) => {
      state.shoppingDataLoading = true;
    });
    builder.addCase(getMainSectionBannerData.fulfilled, (state, action) => {
      state.shoppingDataLoading = false;
      state.newSectionBannerData = action.payload;
    });
    builder.addCase(getMainSectionBannerData.rejected, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingError = action.error.message;
    });

    builder.addCase(getFlashDealsData.pending, (state, action) => {
      state.shoppingDataLoading = true;
    });
    builder.addCase(getFlashDealsData.fulfilled, (state, action) => {
      state.shoppingDataLoading = false;
      state.newFlashDealsData = action.payload;
    });
    builder.addCase(getFlashDealsData.rejected, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingError = action.error.message;
    });

    builder.addCase(getSingleFlashDeal.pending, (state, action) => {
      state.shoppingDataLoading = true;
    });
    builder.addCase(getSingleFlashDeal.fulfilled, (state, action) => {
      console.log('Fulfilled Action Payload:', action.payload);
      state.shoppingDataLoading = false;
      state.singleFlashDealsData = action.payload;
    });
    builder.addCase(getSingleFlashDeal.rejected, (state, action) => {
      state.shoppingDataLoading = false;
      state.shoppingError = action.error.message;
    });
    builder.addCase(getCartData.pending, (state, action) => {
      state.cartDataLoading = true;
    });
    builder.addCase(getCartData.fulfilled, (state, action) => {
      state.cartDataLoading = false;
      state.cartData = action.payload;
    });
    builder.addCase(getCartData.rejected, (state, action) => {
      state.cartError = action.error.message;
    });

    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      const itemId = action.meta.arg;
      if (state && state.items) {
        state.items = state.items.filter(item => item.id !== itemId);
      }
    });

    builder.addCase(deleteCartItem.rejected, (state, action) => {
      state.mainStatus = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(removeAllCart.pending, (state) => {
      state.cartDataLoading = true
    })
    builder.addCase(removeAllCart.fulfilled, (state, action) => {
      state.cartDataLoading = false;
      state.cartData = action.payload;
    })
    builder.addCase(removeAllCart.rejected, (state, action) => {
      state.error = action.error.message;
    })

    // Checkout Product
    builder.addCase(checkoutProduct.pending, (state, action) => {
      state.mainStatus = 'loading';
    });

    builder.addCase(checkoutProduct.fulfilled, (state, action) => {
      state.checkoutProductDetail = action.payload;
    });
    builder.addCase(checkoutProduct.rejected, (state, action) => {
      state.mainStatus = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(orderPlaced.fulfilled, (state, action) => {
      state.cartData = null;
    });
    builder.addCase(orderPlaced.rejected, (state, action) => {
      state.mainStatus = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(getOrderHistoryDetails.fulfilled, (state, action) => {
      state.orderHistoryDetails = action.payload.orders;
    });
    builder.addCase(getOrderHistoryDetails.rejected, (state, action) => {
      state.mainStatus = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(getOrderHistoryDetailsID.fulfilled, (state, action) => {
      state.orderDetailsID = action.payload;
    });
    builder.addCase(getOrderHistoryDetailsID.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // Children List
    builder.addCase(childrenList.fulfilled, (state, action) => {
      state.childrenDetails = action.payload.childs;
    });
    builder.addCase(childrenList.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // Question List
    builder.addCase(questionList.fulfilled, (state, action) => {
      state.questionDetails = action.payload;
    });
    builder.addCase(questionList.rejected, (state, action) => {
      state.error = action.error.message;
    });

    // Add Question
    builder.addCase(addQuestion.fulfilled, (state, action) => {
      state.questionDetails = action.payload;
    })
    builder.addCase(addQuestion.rejected, (state, action) => {
      state.error = action.error.message;
    })

    // Add Answer
    builder.addCase(addAnswer.fulfilled, (state, action) => {
      state.questionDetails = action.payload;
    })
    builder.addCase(addAnswer.rejected, (state, action) => {
      state.error = action.error.message;
    })

    // customsceen
    builder.addCase(CustomPageScreen.fulfilled, (state, action) => {
      state.customData = action.payload;
    })
    builder.addCase(CustomPageScreen.rejected, (state, action) => {
      state.error = action.error.message;
    })



    // Sub Categories
    builder.addCase(getSubCategories.fulfilled, (state, action) => {
      state.subCatData = action.payload;
    })
    builder.addCase(getSubCategories.rejected, (state, action) => {
      state.error = action.error.message;
    })
  },
});

export const {
  decreaseProductQuantity,
  increaseProductQuantity,
  AddtoCartProductSize,
  setSelectedId,
  setSelectedFilter
} = mainSlice.actions;

export default mainSlice.reducer;
