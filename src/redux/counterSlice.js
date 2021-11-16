import { createSlice } from "@reduxjs/toolkit";
//import { map } from "jquery";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: {},
    countShoppingList: 0,
    shoppingList: [],
    total: 0
  },
  reducers: {
    increment: (state, itemId) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value[itemId.payload]
        ? (state.value[itemId.payload] = state.value[itemId.payload] + 1)
        : (state.value[itemId.payload] = 1);

      //console.log(itemId.payload);
      //console.log(state.value[itemId.payload]);
    },
    decrement: (state, itemId) => {
      //state.value.set("itemId", state.value[itemId] - 1);
      state.value[itemId.payload] && state.value[itemId.payload] > 0
        ? (state.value[itemId.payload] = state.value[itemId.payload] - 1)
        : (state.value[itemId.payload] = 0);
    },
    incrementByAmount: (state, itemId, action) => {
      //state.value[itemId] += action.payload;
      //console.log("incrementByAmount");
    },
    addEltShoppingList: (state, product) => {
      let total = 0;
      const itemId = product.payload[0];
      const categorie = product.payload[1];
      const title = product.payload[2];
      const quantity = state.value[itemId];
      const price = Math.round(quantity * product.payload[4] * 100) / 100;
      quantity > 0
        ? state.value["shoppingList"]
          ? (state.value["shoppingList"] += 1)
          : (state.value["shoppingList"] = 1)
        : null;
      quantity > 0
        ? state.shoppingList.push([itemId, categorie, title, quantity, price])
        : null;

      state.shoppingList.map((i) => (total += i[4]));
      state.total = Math.round(total * 100) / 100;
    },
    supprEltShoppingList: (state, itemId) => {
      let total = 0;
      console.log(state.value[itemId.payload]);
      //const quantity = state.value[itemId.payload];
      state.value["shoppingList"] -= 1;
      const elt = state.shoppingList.indexOf(itemId.payload);
      state.shoppingList.splice([elt]);
      state.shoppingList.map((i) => (total += i[4]));
      state.total = Math.round(total * 100) / 100;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addEltShoppingList,
  supprEltShoppingList
} = counterSlice.actions;

export default counterSlice.reducer;
