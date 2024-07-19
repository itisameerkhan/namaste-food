import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) =>
          item.data.data.card.info.id === action.payload.data.data.card.info.id
      );
      if (index !== -1 && state.items[index].count === 1) {
        state.items.splice(index, 1);
      } else if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          count: action.payload.count,
        };
      }
    },
    clearCart: (state, action) => {
      console.log(current(state));
      state.items = [];
    },
    updateCart: (state, action) => {
      const index = state.items.findIndex(
        (item) =>
          item.data.data.card.info.id === action.payload.data.data.card.info.id
      );
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          count: action.payload.count,
        };
      }
    },
  },
});

export const { addItem, removeItem, clearCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
