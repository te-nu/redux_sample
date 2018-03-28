import { INCREMENT } from "./actions";
import { combineReducers } from "redux";

export function displayNumber(state = 0, action): number{
    if(action.type == INCREMENT) return state + action.num;
    return state;
}

const counter = combineReducers({
    displayNumber
})

export default counter;