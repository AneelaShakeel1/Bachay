import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiManager from '../../../api/ApiManager';

// export const getProductsList = createAsyncThunk(
//   'product/list',
//   async (_, { signal }) => {
//     try {
//       const response = await ApiManager.get(`product/list`, { signal });
//       return response.data;
//     } catch (error) {
//       console.error('ERROR OF Shopping Data:', error);
//       if (error.response) {
//         throw new Error(error.response.data); // Throw the specific error message from the server
//       } else {
//         throw new Error(error.message);
//       }
//     }
//   },
// );



export const getProductsList = createAsyncThunk('product/list', async ({ id }, { signal }) => {
  try {
    const url = id ? `/product/list?filter=${id}` : '/product/list';
    const response = await ApiManager.get(url, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log('ERROR OF getProductsList Data'), error;
    if (error.response) {
      throw new Error(error.response?.message);
    } else {
      throw new Error(error.message);
    }
  }
});





export const getProductDetails = createAsyncThunk(
  'product/detail',
  async (id, { getState, signal }) => {
    console.log('PRODUCT ID', id);
    try {
      const response = await ApiManager.get(`product/detail/${id}`, {
        signal,
      });
      console.log('dataaaaaaa', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

// export const getShoppingData = createAsyncThunk(
//   'home',
//   async (isLoading, { signal }) => {
//     try {
//       const response = await ApiManager.get(`home`, {
//         signal,
//       });
//       isLoading(false);
//       return response.data;
//     } catch (error) {
//       console.log('ERROR OF Shopping Data');
//       if (error.response) {
//         throw new Error(error.response?.message);
//       } else {
//         throw new Error(error.message);
//       }
//     }
//   },
// );

export const getShoppingData = createAsyncThunk('home', async ({ id, isLoading }, { signal }) => {
  try {
    const url = id ? `home?id=${id}` : 'home';
    const response = await ApiManager.get(url, {
      signal,
    });
    isLoading(false);
    return response.data;
  } catch (error) {
    console.log('ERROR OF Shopping Data');
    if (error.response) {
      throw new Error(error.response?.message);
    } else {
      throw new Error(error.message);
    }
  }
});

export const getCategoriesPromo = createAsyncThunk('promo', async (_, { signal }) => {
  try {
    const response = await ApiManager.get('promo', {
      signal,
    });
    const newArrivalPromoData = response.data.image.map((image, index) => ({
      id: response.data.ids[index],
      image,
      name: response.data.name[index],
    }));
    return newArrivalPromoData;
  } catch (error) {
    console.log('ERROR OF New Arrival Promo Data');
    if (error.response) {
      throw new Error(error.response?.message);
    } else {
      throw new Error(error.message);
    }
  }
});

export const getAllCategories = createAsyncThunk('categories/all', async (_, { signal }) => {
  try {
    const response = await ApiManager.get(`categories/all`, {
      signal,
    });
    const newArrivalData = response.data.image.map((image, index) => ({
      id: response.data.ids[index],
      image,
      name: response.data.name[index],
    }));
    return newArrivalData;
  } catch (error) {
    console.log('ERROR OF Categories Data');
    if (error.response) {
      throw new Error(error.response?.message);
    } else {
      throw new Error(error.message);
    }
  }
});

export const getMainBannerData = createAsyncThunk(
  'main-banner',
  async (_, { signal }) => {
    try {
      const response = await ApiManager.get(`main-banner`, {
        signal,
      });
      return response.data;
    } catch (error) {
      console.log('ERROR OF Main Banner Data');
      if (error.response) {
        throw new Error(error.response?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

export const getMainSectionBannerData = createAsyncThunk(
  'main-banner-section',
  async (_, { signal }) => {
    try {
      const response = await ApiManager.get(`main-banner-section`, {
        signal,
      });
      return response.data;
    } catch (error) {
      console.log('ERROR OF Main Section Banner Data');
      if (error.response) {
        throw new Error(error.response?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

export const getFlashDealsData = createAsyncThunk(
  'flash-deals',
  async (_, { signal }) => {
    try {
      const response = await ApiManager.get(`flash-deals`, {
        signal,
      });
      return response.data;
    } catch (error) {
      console.log('ERROR OF Flash Deals Data');
      if (error.response) {
        throw new Error(error.response?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

export const getSingleFlashDeal = createAsyncThunk(
  'flash-deal',
  async (id, { signal }) => {
    console.log('-------------flash deal ID----------------', id);
    try {
      const response = await ApiManager.get(`flash-deal/${id}`, {
        signal,
      });
      console.log('flash deal dataaaaaaa', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

export const getCartData = createAsyncThunk(
  'cart',
  async (_, { getState, signal, rejectWithValue }) => {
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.get(`cart`, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      return rejectWithValue(error?.response?.data?.message || 'Unknown error');
    }
  },
);

export const deleteCartItem = createAsyncThunk(
  'cart/remove/',
  async (id, { getState, signal }) => {
    console.log(id);
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.delete(`cart/remove/${id}`, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('deleted cart item', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

export const removeAllCart = createAsyncThunk(
  'cart/remove-all',
  async (cartGroupId, { getState, signal, rejectWithValue }) => {
    console.log(cartGroupId);
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.delete(`cart/remove-all/${cartGroupId}`, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('deleted all cart items', response.data);
      return response.data;
    } catch (error) {
      console.error('Error removing all cart items:', error);
      return rejectWithValue(error?.response?.data);
    }
  },
);

// export const shippingMethod = createAsyncThunk(
//   'customer/shipping-methods',
//   async (_, { signal }) => {
//     try {
//       const res = await ApiManager.get('customer/shipping-methods', {
//         signal,
//       });
//       console.log('shipping method', res.data);
//       return res.data;
//     } catch (error) {
//       console.log('ERROR OF shipping method', error);
//       if (error.response) {
//         throw new Error(error.response?.data?.message);
//       } else {
//         throw new Error(error.message);
//       }
//     }
//   },
// );

export const checkoutProduct = createAsyncThunk(
  'customer/checkout',
  async (_, { signal, getState }) => {
    try {
      const token = getState().authReducer.userToken;
      await ApiManager.post(`customer/checkout`, data, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error) {
      // setModalVisible(true)
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

export const orderPlaced = createAsyncThunk(
  'customer/order/place',
  async (cart_group_ids, { signal, getState }) => {
    console.log("loooagyaaaaaa", cart_group_ids);
    try {
      const token = getState().authReducer.userToken;
      await ApiManager.post(`customer/order/place`, { cart_group_ids }, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      return cart_group_ids;
    } catch (error) {
      // setModalVisible(true)
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

export const AddtoCart = createAsyncThunk(
  'cart/add',
  async (data, { getState, signal }) => {
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.post(`cart/add`, data, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('CART DATAAAAAAAA ADD', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

export const getOrderHistoryDetails = createAsyncThunk(
  'customer/order/list',
  async (status, { getState, signal }) => {
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.get('customer/order/list', {
        signal,
        headers: { Authorization: `Bearer ${token}` },
        params: { 'filter[status]': status }, // Use the status parameter here
      });
      console.log('dataaaaaaaa', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

export const getOrderHistoryDetailsID = createAsyncThunk(
  'customer/order/detail',
  async (id, { getState, signal }) => {
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.get(`customer/order/detail/${id}`, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('order detail dataaaaaaa', response.data);
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
);

// ! Add Children
export const addChildren = createAsyncThunk(
  'profile/relations/add',
  async ({ formData, childrenData, setModalVisible }, { getState, signal }) => {
    const token = getState().authReducer.userToken;

    try {
      const res = await ApiManager.post(
        'profile/relations',
        formData,
        childrenData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          signal,
        },
      );
      return res.data;
    } catch (error) {
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

// ! Update Children
export const updateChildren = createAsyncThunk(
  'profile/relations/edit',
  async ({ data, id, setModalVisible }, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.post(`profile/relations/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
      });
      return res.data;
    } catch (error) {
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

// ! Children List
export const childrenList = createAsyncThunk(
  'profile/relations',
  async (_, { getState }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get('profile/relations', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Children List API', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF CHILDREN DETAILS', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Question List
export const questionList = createAsyncThunk(
  'customer/qna/question',
  async (_, { getState }) => {
    const token = getState().authReducer.userToken;
    try {
      const res = await ApiManager.get('customer/qna/question', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Question List API', res.data);
      return res.data;
    } catch (error) {
      console.log('ERROR OF QUESTION LIST', error);
      if (error.response) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
);

// ! Add Question
export const addQuestion = createAsyncThunk(
  'customer/qna/question/add',
  async (credentials, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    const { data, setButtonLoading } = credentials;
    try {
      console.log('Adding question with data:', data);
      const res = await ApiManager.post('customer/qna/question/add', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        signal,
      });
      console.log('Question added successfully:', res.data);
      return res.data;
    } catch (error) {
      console.error('Error adding question:', error.message);
      setButtonLoading(false);
      throw new Error(error.message);
    }
  },
);


// ! Add Answer
export const addAnswer = createAsyncThunk(
  'customer/qna/answer/add',
  async (credentials, { getState, signal }) => {
    const token = getState().authReducer.userToken;
    const { data, setButtonLoading } = credentials;
    try {
      console.log('Adding answer with data:', data);
      const res = await ApiManager.post('customer/qna/answer/add', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        signal,
      });
      console.log('Answer added successfully:', res.data);
      return res.data;
    } catch (error) {
      console.error('Error adding answer:', error.message);
      setButtonLoading(false);
      throw new Error(error.message);
    }
  },
);


export const CustomPageScreen = createAsyncThunk(
  'promo/screen',
  async (id, { getState, signal }) => {
    console.log("llllllllll", id);
    try {
      const token = getState().authReducer.userToken;
      const response = await ApiManager.get(`promo/${id}`, {
        signal,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('promo//////', response.data);
      return response.data;
    } catch (error) {
      console.log("promo details", error);
      return error?.response?.data;
    }
  },
);


export const getSubCategories = createAsyncThunk(
  'subCategories',
  async ({ id }, { signal }) => {
    console.log("-----Category ID------", id);
    try {
      const response = await ApiManager.get(`categories/${id}`, {
        signal,
      });
      console.log('------Sub Categories Data', response.data);
      return response.data;
    } catch (error) {
      console.log("Sub Categories Error", error);
      return error?.response?.data;
    }
  },
);