export const getStartDate = value => ({
    type: 'GET_START_DATE',
    payload: {
        startDate: value
    }
});

export const getEndDate = value => ({
    type: 'GET_END_DATE',
    payload: {
        endDate: value
    }
});