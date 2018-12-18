import * as constants from '../constants';

const initialState = {
    records: [],
    sortBy: 'firstName',
    order: 'asc',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_RECORD:
            return {
                ...state,
                records: [...state.records, action.payload]
            };
        case constants.DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter(record => record.id !== action.payload),
            };
        case constants.GET_TABLE:
            return {
                ...state,
                records: action.payload,
            };
        case constants.SORT_TABLE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}