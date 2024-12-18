import { createStore } from 'redux';

const initialState = {
  progress: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return { ...state, progress: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;