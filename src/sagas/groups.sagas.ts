import { call , put , takeLatest , takeEvery , delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_FETCH_ONE, GROUPS_QUERY_CHANGED } from "../actions/action.constant";
import {  groupFetchOneCompletedAction, groupQureyCompletedAction } from "../actions/groups.actions";
import {  fetchGroups as fetchGroupsApi, fetchOneGroup } from "../api/groups";

function* fetchGroups (action : AnyAction) : Generator<any>{
    yield delay(300);
    console.log("saga of fetch groups")
    const groupRes : any = yield call(fetchGroupsApi , {
        query: action.payload,
        status : "all-groups"
    })
    yield put(groupQureyCompletedAction(action.payload , groupRes.data.data))
}


function* fetchone (action : AnyAction) : Generator<any>{
    const res : any = yield call(fetchOneGroup, action.payload)
    yield put(groupFetchOneCompletedAction(res.data.data))
}

export function* watchGroupQueryChanged(){
    yield takeLatest( GROUPS_QUERY_CHANGED, fetchGroups);
    yield takeEvery(GROUPS_FETCH_ONE , fetchone) ;
}