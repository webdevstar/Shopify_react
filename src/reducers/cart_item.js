
let initialState = {
  cart_items: []
};

const chart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_Chart':
      return {
        ...state,
        cart_items: state.cart_items.slice(0).concat(action.payload)
      };
    default:
      return state
  }
}

export default chart