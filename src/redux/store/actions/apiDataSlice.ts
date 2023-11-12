import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Creator {
  href: string;
  id: string;
  username: string;
  mugshot: string;
  name: string;
  verified: boolean;
  is_you: boolean;
  is_staff: boolean;
  following: number;
  followers: number;
  is_following: boolean;
  is_following_too: number;
  groups: string[];
  count_recipes: number;
}

interface Image {
  original: {
    height: number;
    url: string;
    width: number;
    pk: number;
    blurhash: string;
  };
}

interface Item {
  creator: Creator;
  description: string;
  short_description: string;
  href: string;
  id: string;
  images: Image[];
}

interface ApiData {
  items: Item[];
}

interface ApiDataState {
  data: ApiData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | any;
}

const initialState: ApiDataState = {
  data: null,
  status: 'idle',
  error: null,
};

// Action
export const fetchApiData = createAsyncThunk('foodItems', async () => {
  const response = await fetch('https://staging.altacucina.co/v1/collections/byslug/primi-piatti-veloci-2/');
  const data = await response.json();
  return data;
});

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default apiDataSlice.reducer;
