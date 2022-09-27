import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orderList: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orderList = action.payload.orderList;
    },
  },
});

export const { addOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
