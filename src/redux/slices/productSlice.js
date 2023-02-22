import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*async function fetchData() {
  const respone = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await respone.json();
  //   as soon as you get the data send it in your store.
  dispatch(loadProducts(data));
}
converted to AsyncThunk
   ||
   \/
*/
export const fetchData = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await response.json();
  //   dispatchEvent(loadProducts(data));
  // instead of dispatching this time return the data to reducers so as to work with store accordingly, once async operation has fetched the data
  // return data will act as argument for dispatch() function in productList.js.
  return data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    //   use below state if using async thunk
    status: "idle", //can be loading (pending), success(fulfilled), failed(rejected).
    error: null,
  },
  reducers: {
    // state includes products array defined initially while creating the slice.
    // action.payload will be used to update state.products.
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  //   write below code if using async thunk.
  //   builder helps in building reducers mapped to action
  extraReducers: function (builder) {
    //   handle all three states.
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "success";
        //   once data will be fetched it will stored in products array.
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadProducts } = productSlice.actions;
// below line will create a reducer object that will have all reducers in it, helpful to access them in store.js.
export default productSlice.reducer;
