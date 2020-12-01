import produce, { Draft } from 'immer';
import Cookies from 'universal-cookie';
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from '../types';

export const initialState = {
  isAuthenticated: false,
  userLoading: false,
  userData: null,
  userErrorMsg: '',
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_REQUEST : {
        draft.userErrorMsg = '';
        draft.userLoading = true;
        break;
      }
      case LOAD_USER_SUCCESS: {
        draft.isAuthenticated = true;
        draft.userLoading = false;
        draft.userData = action.data.data;
        break;
      }
      case LOAD_USER_FAILURE: {
        draft.isAuthenticated = false;
        draft.userLoading = false;
        draft.userData = null;
        break;
      }
      default: {
        break;
      }
    }
  });
