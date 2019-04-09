export function getPeriodDate(state = {}, action) {
    switch (action.type) {
        case 'GET_START_DATE':
            return {...state, startDate: action.payload.startDate};
        case 'GET_END_DATE':
            return {...state, endDate: action.payload.endDate};
        default:
            return state;
    }
}