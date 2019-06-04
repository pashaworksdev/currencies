export const setStartDate = date => ({
    type: 'SET_START_DATE',
    payload: {
        startDate: date,
    },
});

export const setEndDate = date => ({
    type: 'SET_END_DATE',
    payload: {
        endDate: date,
    },
});
