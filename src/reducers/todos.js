
import { handleActions } from 'redux-actions'
var videolist = new Array();
var video = new Object();
video.name= ""
video.url = ""
videolist.push(video);

export const reducer = handleActions({
    ['goto video page']: (state, action)=>[...state]
},videolist)