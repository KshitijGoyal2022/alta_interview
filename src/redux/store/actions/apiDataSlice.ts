import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Creator {
}
interface Image {
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

// Action -> Fetching all the data from the Altacucina API
export const fetchApiData = createAsyncThunk('foodItems', async () => {
  const response = await fetch('https://staging.altacucina.co/v1/collections/byslug/primi-piatti-veloci-2/?expand=items,items.creator,creator');
  const data = await response.json();
  return data;
});

//Creating the slice
const apiDataSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => { 
        state.status = 'loading'; //Data fetching is in progress
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = 'succeeded'; //Data fetched successfully
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = 'failed'; //Data fetching failed
        state.error = action.payload;
      });
  },
});

export default apiDataSlice.reducer;
