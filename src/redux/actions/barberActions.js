export const FAKE_ACTION= 'FAKE_ACTION';

export const fakeAction = () => {
    return {
        type: FAKE_ACTION,
        payload: { id: 2, fake: 'fake action!' }
        // payload: tasksDat
    }
}