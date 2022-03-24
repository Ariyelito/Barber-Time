export const SET_ACTIVE_BARBER = 'SET_ACTIVE_BARBER';

export const setActiveBarber = (barber) => {
    return {
        type: SET_ACTIVE_BARBER,
        payload: barber
        // payload: tasksDat
    }
}