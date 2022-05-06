import { combineReducers } from "redux";
import amoutReducer from './amountReducer'

 const reducer = combineReducers({
    amount:amoutReducer
})

export default reducer;