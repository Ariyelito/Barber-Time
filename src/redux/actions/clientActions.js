export const FETCH_BARBERS = 'FETCH_BARBERS';

export const fetchBarbers = (tab) => {
    return dispatch => {
        // add logic to get barbers
        dispatch({
            type: FETCH_BARBERS,
            payload: { tab }
        })
    }
}