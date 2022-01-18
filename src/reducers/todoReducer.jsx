const initialState = {
  products: [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
  ],
  carrito: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, carrito: [...state.carrito, action.payload] };
    default:
      return state;
  }
};
