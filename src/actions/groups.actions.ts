
import { Group } from "../modules/Group"
import { GROUPS_FETCH_ONE, GROUPS_FETCH_ONE_COMPLETED, GROUPS_QUERY_CHANGED , GROUPS_QUERY_COMPLETED } from "./action.constant"

export const groupQureyChangedAction = (query : string) => ({ type :  GROUPS_QUERY_CHANGED , payload : query })

export const groupQureyCompletedAction = (query : string , groups : Group[]) => ({ type : GROUPS_QUERY_COMPLETED , payload : {query , groups}  })


export const groupFetchOneAction = (id : number) => ({ type :  GROUPS_FETCH_ONE , payload : id })

export const groupFetchOneCompletedAction = (group: Group) => ({ type :  GROUPS_FETCH_ONE_COMPLETED , payload : group})