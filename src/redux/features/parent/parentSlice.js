import { createSlice } from "@reduxjs/toolkit";
import { getArticlesCategories, getArticlesDetails, getArticlesCategoryDetails } from "./parentThunks";

const initialState = {
    articlesCategoriesList: null,
    error: null,
    parentStatus: 'idle',
    articleDetails: null,
    articleCategoryDetails: null,
}

const parentSlice = createSlice({
    name: 'parent',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getArticlesCategories.pending, (state, action) => {
            state.parentStatus = 'loading';
        });
        builder.addCase(getArticlesCategories.fulfilled, (state, action) => {
            console.log('Fulfilled Action Payload:', action.payload);
            state.parentStatus = 'succeeded';
            state.articlesCategoriesList = action.payload;
        });
        builder.addCase(getArticlesCategories.rejected, (state, action) => {
            state.parentStatus = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(getArticlesDetails.fulfilled, (state, action) => {
            state.articleDetails = action.payload;
        });
        builder.addCase(getArticlesDetails.rejected, (state, action) => {
            state.error = action.error.message;
        });
        builder.addCase(getArticlesCategoryDetails.fulfilled, (state, action) => {
            state.articleCategoryDetails = action.payload;
        });
        builder.addCase(getArticlesCategoryDetails.rejected, (state, action) => {
            state.error = action.error.message;
        });
    }
})
export default parentSlice.reducer;