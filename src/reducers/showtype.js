let initialState = {
  showtype: 'layout_grid'
};

const show = (state = initialState, action) => {
  switch (action.type) {
    case 'changeshowlist':
      return {
        ...state,
        showtype: action.payload
      };
    default:
      return state
  }
}

export default show;