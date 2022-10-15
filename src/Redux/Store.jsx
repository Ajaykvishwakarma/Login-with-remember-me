import { applyMiddleware, legacy_createStore as createStore , compose} from "redux";
import thunk from 'redux-thunk';
import { reducer } from './Reducer';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       
    }) : compose;
    
const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  
   
);

export const Store = createStore(reducer, enhancer);