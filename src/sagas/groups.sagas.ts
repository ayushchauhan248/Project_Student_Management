import { takeEvery , call , put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED } from "../actions/action.constant";
import { groupQureyCompletedAction } from "../actions/groups.actions";
import {  fetchGroups as fetchGroupsApi } from "../api/groups";

export function* fetchGroups (action : AnyAction) : Generator<any>{
    const groupRes : any = yield call(fetchGroupsApi , {
        query: action.payload,
        status : "all-groups"
    })
    yield put(groupQureyCompletedAction(action.payload , groupRes.data.data))
}

export function* watchGroupQueryChanged(){
    console.log("watch bala called")
    yield takeEvery( GROUPS_QUERY_CHANGED, fetchGroups)
}