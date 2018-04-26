import { actionTypes } from '../actions/favorites';

const initialState = [1, 2, 4];

const ACTION_HANDLERS = {
  [actionTypes.TOGGLE_FAVORITE]: (state, action) => {
    const { id } = action;
    const idx = state.indexOf(id);

    if (idx !== -1) {
      return state.filter(f => f !== id);
    }
    return [...state, id];
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
