import{ createStore, combineReducers } from "redux";
import Reducer from "./Components/reducer";

const Store= createStore(combineReducers({
 count:Reducer,
}))
export default Store
    
