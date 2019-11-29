import "cross-fetch/polyfill";
import {CONSTANTS} from "../../utils/constants";

export const IS_DATA_L = 'IS_DATA_L';
export const IS_DATA_S = 'IS_DATA_S';
export const IS_DATA_F = 'IS_DATA_F';

const {URL, GET_USER_CHANNELS} = CONSTANTS;

function dataIsLoading() {
    return {
        type: IS_DATA_L
    }
}

function dataIsFailed() {
    return {
        type: IS_DATA_F
    }
}

function dataIsSuccess(data) {
    return {
        type: IS_DATA_S,
        payload: data
    }
}

export function fetchChannelData(token) {
    let headers = {"Content-Type": "application/json"};

    if (token) {
        headers["Authorization"] = `JWT ${token}`;
    }

    return (dispatch) => {
        dispatch(dataIsLoading());
        return fetch(`${URL}${GET_USER_CHANNELS}`, {headers}).then(
            (response) => {
            console.log(response);
            if (response.status !== 200) {
                dispatch(dataIsFailed());
                throw Error(response.statusText)
            }

            dispatch(dataIsLoading());
            return response.json()
        }).then((data) => {
            console.log(data);
            dispatch(dataIsSuccess(data))
        }).catch((e) => console.error(e));
    };
}
