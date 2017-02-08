
import { handleActions } from 'redux-actions'
import {FETCH_DATA, RECEIVE_DATA} from '../actions/todos'
var videolist = [];
var video = {};
video.description= "test"
video.url = "test"
video.picUrl = "test"
videolist.push(video)
var initialState = {
    videos: videolist,
    fetchingData: false
}

export const todos = handleActions({
    [FETCH_DATA]: (state, action)=>{return Object.assign({},state,{fetchingData:action.payload})},
    [RECEIVE_DATA]: (state,action) => {return Object.assign({},state,{videos:action.payload})}
},initialState)

