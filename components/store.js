import { combineReducers,createStore } from 'redux';

var chat = (state = [{'name':'Nguyễn Phúc','message': 'congratulate!'}] , action) => {
  switch (action.type) {
    case 'SEND':
      return  [...state,action.item];
    case 'CLEAR':
      return [] ;
    default: return state;

  }
}
var default_status = [
  { 'name':'Nguyễn Phúc','status':'<3 yêu anh','avatar':'https://i.imgur.com/cjQ1OsJ.jpg','time':'a few second ago','cover':'https://i.imgur.com/tqPOrkW.jpg' },
  { 'name':'Phan văn Đức','status':'nét đẹp việt nam','avatar':'https://i.imgur.com/tqPOrkW.jpg','time':'10 second ago','cover':'https://i.imgur.com/tw2VXra.png' },
  { 'name':'Bùi Tiến Dũng','status':'cổ vũ bóng đá việt nam ','avatar':'https://i.imgur.com/tw2VXra.png','time':'1 minute', 'cover':'https://i.imgur.com/twKPvLQ.png' },
];
var status = (state = default_status , action) => {
  switch (action.type) {
    case 'POST_STATUS':
      return  [action.item,...state];
    case 'CLEAR':
      return [] ;
    default: return state;
  }
}
var rootReducer = combineReducers({chat,status});
var store = createStore(rootReducer);
// end redux store
export default store;
