import * as Action from './constants';

const defaultState = {
  login: false,
  userID: null,
  userName: '',
  authority: 0,
}

const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case Action.LOG_IN: { return state }
    case Action.LOG_OUT: { return state }
    default: { return state }
  }
}

export default reducer;
