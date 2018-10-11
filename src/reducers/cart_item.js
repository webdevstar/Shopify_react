
let initialState = {
  cart_items: {products:[]}
};

const chart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_Chart':
      {
        return {
          ...state,
          cart_items: action.payload
        }
      }
    case 'Remove_Chart':
      {
        const newArray = state.cart_items.products.slice(0);
        const indexToRemove = newArray.findIndex((e) => e.id === action.payload)
		state.cart_items.quantity = state.cart_items.quantity - newArray[indexToRemove].quantity
        if (indexToRemove > -1) {
          newArray.splice(indexToRemove, 1);
        }
        return {
          ...state,
          cart_items: {
            ...state.cart_items,
            products: newArray,
          }
        }
      }
    default:
      return state
  }
}

export default chart;