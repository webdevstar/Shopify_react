
let initialState = {
  cart_items: {products:[]}
};

const chart = (state = initialState, action) => {
  switch (action.type) {
    // case 'ADD_Chart':
    //   {
    //     var data = {};
    //     // let cart = false;
    //     data.id = action.payload.id;
    //     data.quantity = 1;
    //     var flag = true;

    //     for(var i=0; i<state.cart_items.length; i++){
    //       if(state.cart_items[i].id == data.id) flag=false;
    //     }
    //     if(flag){
    //       return {
    //         ...state,
    //         cart_items: state.cart_items.slice(0).concat(data)
    //       };
    //     }
    //   }
    case 'ADD_Chart':
      {
        return {
          ...state,
          // cart_items: state.cart_items.slice(0).concat(action.payload)
          cart_items: action.payload
        }
      }
    default:
      return state
  }
}

export default chart;