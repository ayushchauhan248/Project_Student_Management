import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/action.constant";
import { User } from "../modules/User";
import { addOne, EntityState } from "./entities.reducer";

 export interface UserState extends EntityState<User>{
}

const initialState = {
    byId : {}
}

export const userReducer : Reducer<UserState> = (
    state = initialState,
    action
) => {
    switch(action.type){
        case ME_LOGIN:
        case ME_FETCH:
            return addOne(state , action.payload) as UserState;
        default:
            return state;
    }
}