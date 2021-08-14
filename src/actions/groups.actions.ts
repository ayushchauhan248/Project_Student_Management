
import { Group } from "../modules/Group"
import { GROUPS_QUERY_CHANGED , GROUPS_QUERY_COMPLETED } from "./action.constant"

export const groupQureyChangedAction = (query : string) => ({ type :  GROUPS_QUERY_CHANGED , payload : query })

export const groupQureyCompletedAction = (query : string , groups : Group[]) => ({ type : GROUPS_QUERY_COMPLETED , payload : {query , groups}  })
