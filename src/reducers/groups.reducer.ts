import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "../actions/action.constant";
import { Group } from "../modules/Group";
import { addMany, EntityState, getIds } from "./entities.reducer";

export interface GroupState extends EntityState<Group>{ 
    query : string;
    loading :  boolean 
    queryMap : { [query : string] : number[] }
}
const initialState = {
    byId : {},
    query : "",
    queryMap : {},
    loading : false
};

export const groupReducer : Reducer<GroupState> = (state = initialState ,action) => {
    switch(action.type){
        case GROUPS_QUERY:
            const query = action.payload
            return { 
            ...state ,
            query: query,
            loading : true
            };
        case GROUPS_QUERY_COMPLETED:
            const groups = action.payload.groups as Group[];

            const groupIds = getIds(groups);

            const newState = addMany(state , groups) as GroupState;

            return {
                ...newState,
                queryMap :{...newState.queryMap , [action.payload.query] : groupIds },
                loading : false 
            }
        default:
            return state
    }
}