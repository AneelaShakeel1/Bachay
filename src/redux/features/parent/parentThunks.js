import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "../../../api/ApiManager";

// articles Categories 
export const getArticlesCategories = createAsyncThunk(
    'article/category/all',
    async (_, { signal }) => {
        try {
            const response = await ApiManager.get(`article/category/all`, { signal });
            return response.data;
        } catch (error) {
            console.error('ERROR OF Article Category List Data:', error);
            if (error.response) {
                throw new Error(error.response.data);
            } else {
                throw new Error(error.message);
            }
        }
    },
);


export const getArticlesDetails = createAsyncThunk(
    'article/category',
    async ({ id }, { signal }) => {
        console.log('ID Articleeeeeeeeeeeee', id);
        try {
            const response = await ApiManager.get(`article/category/${id}`, {
                signal,
            });
            console.log(' article  dataaaaaaa', response.data);
            return response.data;
        } catch (error) {
            return error?.response?.data;
        }
    },
);

export const getArticlesCategoryDetails = createAsyncThunk(
    'article',
    async (id, { signal }) => {
        console.log('-------------Article Category Id----------------', id);
        try {
            const response = await ApiManager.get(`article/${id}`, {
                signal,
            });
            console.log(' article category dataaaaaaa', response.data);
            return response.data;
        } catch (error) {
            return error?.response?.data;
        }
    },
);