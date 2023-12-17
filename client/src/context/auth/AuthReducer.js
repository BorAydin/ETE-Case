const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      localStorage.setItem('user', JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        user: null,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
