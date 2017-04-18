import {
  TOGGLE_APP_SIDER_COLLAPSE
} from '../constants/app';
import perference from '../utils/preference';

export function toogleCollapse(collapsed) {
  return (dispatch) => perference
    .set('appNav.collapsed', !collapsed)
    .then(
      () => dispatch({
        type: TOGGLE_APP_SIDER_COLLAPSE
      })
    );
}
