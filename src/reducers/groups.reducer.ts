import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "../actions/action.constant";
import { Group } from "../modules/Group";
import { addMany, EntityState, getIds } from "./entities.reducer";

export interface GroupState extends EntityState<Group>{
    query : string;
    queryMap : { [query : string] : number[] }
}
const initialState = {
    byId : {},
    query : "",
    queryMap : {}
};

export const groupReducer : Reducer<GroupState> = (state = initialState ,action) => {
    switch(action.type){
        case GROUPS_QUERY:
            return { ...state , query: action.payload};
        case GROUPS_QUERY_COMPLETED:
            const groups = action.payload.groups as Group[];

            const groupIds = getIds(groups);

            const newState = addMany(state , groups) as GroupState;

            return {
                ...newState,
                queryMap :{...newState.queryMap , [action.payload.query] : groupIds },
            }
        default:
            return state
    }
}