
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          cart_item: action.cart_item,
        }
      ]
    default:
      return state
  }
}

export default todos