import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://real-time-flipkart-api.p.rapidapi.com/products-by-category',
  params: {
    category_id: 'tyy,4io',
    page: '1',
    sort_by: 'popularity'
  },
  headers: {
    'x-rapidapi-key': '9a075b31a6mshcf946ed8a384763p1621f0jsn60a419664a93',
    'x-rapidapi-host': 'real-time-flipkart-api.p.rapidapi.com'
  }
};

export const fetchProducts=createAsyncThunk('fetchProducts',async ()=>{
  try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
})

const productSlice=createSlice({
  name:"product",
  initialState:{
    data:[],
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,()=>{
      console.log("Pending...")
    })
    builder.addCase(fetchProducts.rejected,()=>{
      console.log("Rejected...")
    })
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      console.log("Fulfilled...")
      state.data=action.payload;
    })
  }
})

export default productSlice.reducer;