export const FETCH_BARBERS = 'FETCH_BARBERS';
export const FETCH_HOLIDAYS = 'FETCH_BARBERS';
export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SELECT_DAY = 'SELECT_DAY';
export const SELECTED_TIME = 'SELECTED_TIME';
export const SELECTED_BARBER = 'SELECTED_BARBER';

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
        payload:  name 
    }
}

export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        payload:  email
    }
}

export const selectDay = (day) => {
    return {
        type: SELECT_DAY,
        payload:  day 
    }
}
export const selectedTime = (time) => {
    return {
        type: SELECTED_TIME,
        payload:  time 
    }
}
export const selectedBarber = (selBarber) => {
    return {
        type: SELECTED_BARBER,
        payload:  selBarber 
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
            payload:  data
        });
    }
}