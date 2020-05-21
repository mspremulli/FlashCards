

const INITIAL_STORE = {
  cardList:[],
  loading: false,
  errors: {},
  count: 0,
};

export default (store = INITIAL_STORE, action) =>{
  // console.log('action',action.payload);
  switch(action.type) {
    case "INIT":
      return {
        ...store,
        cardList: action.payload
      }
    case "COUNT":
      return {
        ...store,
        count:action.payload
      }
    default: return store;
  }

};