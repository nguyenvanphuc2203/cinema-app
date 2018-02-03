import { combineReducers } from 'redux';
import {
  POST_STATUS,
  CLEAR_STATUS,
  SEND_MESSAGE,
  CLEAR_MESSAGE
} from './actions';

/* chat reducer */
var chat = (state = [{'name':'Nguyễn Phúc','message': 'congratulate!'}] , action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return  [...state,action.item];
    case CLEAR_MESSAGE:
      return [] ;
    default: return state;

  }
}
/* status reducer */
var default_status = [
  { 'name':'Nguyễn Phúc','status':'<3 yêu anh','avatar':'https://i.imgur.com/cjQ1OsJ.jpg','time':'a few second ago','cover':'https://i.imgur.com/tqPOrkW.jpg' },
  { 'name':'Phan văn Đức','status':'nét đẹp việt nam','avatar':'https://i.imgur.com/tqPOrkW.jpg','time':'10 second ago','cover':'https://i.imgur.com/tw2VXra.png' },
  { 'name':'Bùi Tiến Dũng','status':'cổ vũ bóng đá việt nam ','avatar':'https://i.imgur.com/tw2VXra.png','time':'1 minute', 'cover':'https://i.imgur.com/twKPvLQ.png' },
];
var status = (state = default_status , action) => {
  switch (action.type) {
    case POST_STATUS:
      return  [action.item,...state];
    case CLEAR_STATUS:
      return [] ;
    default: return state;
  }
}

/* combineReducers */
export default rootReducer = combineReducers({chat,status});
