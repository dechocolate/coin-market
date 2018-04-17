import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

// action types
const SET_SCREEN_MASK_VISIBILITY = 'base/SET_SCREEN_MASK_VISIBILITY';
const SHOW_USER_MENU = 'base/SHOW_USER_MENU';
const HIDE_USER_MENU = 'base/HIDE_USER_MENU';
const SHOW_SIDEBAR = 'base/SHOW_SIDEBAR';
const HIDE_SIDEBAR = 'base/HIDE_SIDEBAR';
const SHOW_MSGBOX = 'base/SHOW_MSGBOX';
const HIDE_MSGBOX = 'base/HIDE_MSGBOX';

// action creator
export const setScreenMaskVisibility = createAction(SET_SCREEN_MASK_VISIBILITY); // (visible)
export const showUserMenu = createAction(SHOW_USER_MENU);
export const hideUserMenu = createAction(HIDE_USER_MENU);
export const showSidebar = createAction(SHOW_SIDEBAR);
export const hideSidebar = createAction(HIDE_SIDEBAR);
export const showMsgbox = createAction(SHOW_MSGBOX);
export const hideMsgbox = createAction(HIDE_MSGBOX);

// initial state
const initialState = Map({
  screenMask: Map({
    visible: false
  }),
  header: Map({
    userMenu: false
  }),
  sidebar: Map({
    visible: false
  }),
  msgbox: Map({
    visible: false,
    type: null,
    text: null
  })
});

// reducer
export default handleActions({
  [SET_SCREEN_MASK_VISIBILITY]: (state, action) => {
    return state.setIn(['screenMask', 'visible'], action.payload);
  },
  [SHOW_USER_MENU]: (state, action) => state.setIn(['header', 'userMenu'], true),
  [HIDE_USER_MENU]: (state, action) => state.setIn(['header', 'userMenu'], false),
  
  [HIDE_SIDEBAR]: (state, action) => state.setIn(['sidebar', 'visible'], false),
  [SHOW_SIDEBAR]: (state, action) => state.setIn(['sidebar', 'visible'], true),
  [SHOW_MSGBOX]: (state, action) => {
      const { type, text } = action.payload;
      return state.set('msgbox', Map({
        visible: true,
        type,
        text
      })).setIn(['screenMask', 'visible'], true);
  },
  [HIDE_MSGBOX]: (state, action) => state.setIn(['msgbox', 'visible'], false).setIn(['screenMask', 'visible'], false)
}, initialState);