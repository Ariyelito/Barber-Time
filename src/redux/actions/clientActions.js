export const FETCH_BARBERS = 'FETCH_BARBERS';
export const FETCH_HOLIDAYS = 'FETCH_BARBERS';
export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';

export const fetchBarbers = (tab) => {
    return dispatch => {
        dispatch({
            type: FETCH_BARBERS,
            payload: { tab }
        })
    }
}

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: { name }
    }
}

export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        payload: { email }
    }
}

export const fetchHolidays = () => {
    return async dispatch => {
        const res = await fetch('https://date.nager.at/api/v2/publicholidays/2022/CA/');
        const data = await res.json();
        console.log("fetched holidays :");
        console.log(data);
        dispatch({
            type: FETCH_HOLIDAYS,
            payload: { data }
        });
    }
}