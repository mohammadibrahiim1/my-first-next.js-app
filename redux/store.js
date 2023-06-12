const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;
