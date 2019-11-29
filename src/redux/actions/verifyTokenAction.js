import "cross-fetch/polyfill";
import {CONSTANTS} from "../../utils/constants";
import {getFormData} from "../../utils/getFormData";

export const IS_TOKEN_VERIFY_S = 'IS_TOKEN_VERIFY_S';

const {URL, JWT_REFRESH, JWT_VERIFY} = CONSTANTS;

function setToken(token) {
    return {
        type: IS_TOKEN_VERIFY_S,
        payload: token
    }
}

export function checkTokenData(token) {
    const formData = getFormData({"token": token});

    return (dispatch) => {
        return fetch(`${URL}${JWT_VERIFY}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: formData
        }).then((response) => {
            console.log(response);
            if (response.status !== 200) {
                throw Error(response.statusText)
            }

            return response.json()
        }).then((data) => {
            console.log(data);
            dispatch(setToken(data))
        }).catch((e) => console.error(e));
    };
}

export function refreshTokenData(token) {
    const formData = getFormData({"token": token});

    return (dispatch) => {
        return fetch(`${URL}${JWT_REFRESH}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: formData
            }).then((response) => {
            console.log(response);
            if (response.status !== 200) {
                throw Error(response.statusText)
            }

            return response.json()
        }).then((data) => {
            console.log(data);
            dispatch(setToken(data))
        }).catch((e) => console.error(e));
    };
}
