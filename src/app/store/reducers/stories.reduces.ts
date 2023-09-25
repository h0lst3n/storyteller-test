import { createSlice } from "@reduxjs/toolkit";
import { fetchStories } from '../thunks/stories.thunk';

const initialState = {
    offset: 0,
    limit: 20,
    total: 0,
    page: 0,
    pageCount: 0,
    records: [],
};

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(fetchStories.fulfilled, (state, { payload }) => {
            const { total, page, pageCount,records } = payload;
            
            state.records = [...state.records, ...records];
            state.offset += state.limit;
            state.total = total;
            state.page = page;
            state.pageCount = pageCount;
        });
    }
});

export const { reset } = storiesSlice.actions;

export default storiesSlice;