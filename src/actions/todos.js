import {createAction} from 'redux-actions'

export const VIDEO_REQUEST = "goto video page"
export const FETCH_DATA = 'fetching data is on going'
export const RECEIVE_DATA = 'received the data'

export function videoRequest(url) {
    return function (dispatch) {
        dispatch(fetchingData(true));
        return fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                return dispatch(receiveData(json))
            })
    }
}

export const fetchingData = createAction(FETCH_DATA, payload => payload)

export const receiveData = createAction(RECEIVE_DATA, payload => payload)