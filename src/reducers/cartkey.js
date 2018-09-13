let initialState = {
  cartkey: false
};

const cartkey = (state = initialState, action) => {
  switch (action.type) {
    case 'Cartkey':
      return {
        ...state,
        cartkey: action.payload
      };
    default:
      return state
  }
}

export default cartkey;