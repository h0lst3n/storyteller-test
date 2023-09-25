import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_STORIES } from '../actions/stories.actions';
import { getStories } from 'src/api/stories.api';


export const fetchStories = createAsyncThunk(
    FETCH_STORIES, 
    async (optData, { getState }) => {
        console.log('will fetch');
        const { stories: { offset, limit } } = getState();
        const response = await getStories({ offset, limit });
        const { total, page, pageCount } = response.meta;

        return {
            total,
            pageCount,
            page,
            records: response.records,
        }; 
    }
);