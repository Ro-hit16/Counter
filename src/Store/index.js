import { createStore } from "redux";
const Initial_Value = {
  counter: 0,
};

const countReducer = (store = Initial_Value, Action) => {
    if(Action.type === 'Increment'){
        return {counter : store.counter+1}
    }
    else if(Action.type === 'Decrement'){
        return {counter:store.counter-1}
    }
    else if(Action. type === 'Add'){
        return{ counter: store.counter + Number(Action.payload.num )}
    }
    else if(Action. type === 'Substract'){
        return{ counter: store.counter - Number(Action.payload.num ) }
    }
    else if(Action.type === 'Reset'){
        return {counter : 0}
    }
  return store;
};
const counterStore = createStore(countReducer);
export default counterStore;
