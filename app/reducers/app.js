import { TOGGLE_APP_SIDER_COLLAPSE } from '../constants/app';
import preference from '../utils/preference';

const initState = {
  collapsed: preference.get('appNav.collapsed', true)
};


function app(state = initState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_APP_SIDER_COLLAPSE:
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
}

export default app;
