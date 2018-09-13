
let initialState = {
  cart_items: []
};

const chart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_Chart':
      {
        var data = {};
        // let cart = false;
        data.id = action.payload.id;
        data.quantity = action.payload.quantity;
        var flag = true;

        for(var i=0; i<state.cart_items.length; i++){
          if(state.cart_items[i].id == data.id) flag=false;
        }
        if(flag){
          return {
            ...state,
            cart_items: state.cart_items.slice(0).concat(data)
          };
        }
      }
    default:
      return state
  }
}

export default chart;