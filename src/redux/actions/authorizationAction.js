import "cross-fetch/polyfill";
import {CONSTANTS} from "../../utils/constants";

export const IS_AUTHORIZATION_DATA_L = 'IS_AUTHORIZATION_DATA_L';
export const IS_AUTHORIZATION_DATA_S = 'IS_AUTHORIZATION_DATA_S';
export const IS_AUTHORIZATION_DATA_F = 'IS_AUTHORIZATION_DATA_F';

const {URL, JWT_CREATE} = CONSTANTS;

function dataIsLoading() {
    return {
        type: IS_AUTHORIZATION_DATA_L
    }
}

function dataIsFailed() {
    return {
        type: IS_AUTHORIZATION_DATA_F
    }
}

function dataIsSuccess(data) {
    return {
        type: IS_AUTHORIZATION_DATA_S,
        payload: data
    }
}

export function fetchAuthorizationData(data) {
    return (dispatch) => {
        dispatch(dataIsLoading());
        return fetch(`${URL}${JWT_CREATE}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
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
