let initialState = {
  loginstate: false,
  user_id: -1
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        loginstate: true,
		user_id:action.payload
      };
	case 'logout':
		return{
		...state,
			loginstate: false,
			user_id:-1
		};
    default:
      return state
  }
}

export default auth;