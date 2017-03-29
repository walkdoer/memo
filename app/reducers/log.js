import {
  START_OPEN_LOG,
  OPEN_LOG_SUCCESS,
  OPEN_LOG_ERROR,
} from '../constants/log';

function log(state = {
  loading: false,
  error: null,
  fileContent: '',
  filepath: null,
}, action) {
  const { type } = action;
  switch (type) {
    case START_OPEN_LOG:
      return { ...state, loading: true, filepath: action.payload };
    case OPEN_LOG_SUCCESS:
      return { ...state, loading: false, fileContent: action.payload };
    case OPEN_LOG_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default log;
