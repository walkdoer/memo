import { TOGGLE_APP_SIDER_COLLAPSE } from '../constants/app';

function app(state = { collapsed: false }, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_APP_SIDER_COLLAPSE:
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
}

export default app;
