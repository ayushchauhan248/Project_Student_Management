import { bindActionCreators } from "redux"
import { Group } from "../modules/Group"
import { store } from "../store"
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./action.constant"

export const groupQureyAction = (query : string) => ({ type : GROUPS_QUERY , payload : query })

export const groupQureyCompletedAction = (query : string , groups : Group[]) => ({ type : GROUPS_QUERY_COMPLETED , payload : {query , groups}  })


export const groupsActions = bindActionCreators(
    {
        query : groupQureyAction,
        queryCompleted : groupQureyCompletedAction
    },
    store.dispatch
)