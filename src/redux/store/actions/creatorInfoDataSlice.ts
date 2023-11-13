import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


interface Item {
  }

interface CreatorData {
    items: Item[];
  }

interface CreatorInfoDataState {
    data: CreatorData ;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | any;
  }

const initialState: CreatorInfoDataState = {
    data: [],
    status: 'idle',
    error: null,
  };

  export const fetchCreatorData = createAsyncThunk('foodItems', async (creatorUrl) => {
    const response = await fetch(creatorUrl);
    const data = await response.json();
    return data;
  });

  const creatorInfoDataSlice = createSlice({
    name: 'creatorData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCreatorData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCreatorData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data.push(action.payload);
        })
        .addCase(fetchCreatorData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });
  
  export default creatorInfoDataSlice.reducer;