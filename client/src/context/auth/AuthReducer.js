import { setLocalStorageValue } from '../../utils/localStorage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      setLocalStorageValue('user', action.payload);

      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'REMOVE_USER':
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action?.payload ?? true,
      };
    default:
      return state;
  }
};

export default authReducer;
