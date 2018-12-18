import {GET_TABLE, DELETE_RECORD, SORT_TABLE} from "../constants";

export const getTable = () => (dispatch) => {
    const records = JSON.parse(localStorage.getItem('records'));
    if (records)

        dispatch({
            type: GET_TABLE,
            payload: records
        })
};

export const deleteRecord = id => (dispatch) => {
    const records = JSON.parse(localStorage.getItem('records'));
    if (records) {
        const updatedRecords = records.filter(record => record.id !== parseInt(id));
        localStorage.setItem('records', JSON.stringify(updatedRecords));
    }
    dispatch({
        type: DELETE_RECORD,
        payload: parseInt(id),
    })
};

export const sortTable = (sortBy, changeOrder = true) => (dispatch, getState) => {
    const prevSortBy = getState().table.sortBy;
    const {order, records} = getState().table;
    const sortedRecords = Array.from(records).sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
    });
    if (prevSortBy !== sortBy) {
        dispatch({
            type: SORT_TABLE,
            payload: {
                records: sortedRecords,
                sortBy,
                order: 'asc',
            }
        })
    } else if (changeOrder) {
        switch (order) {
            case 'asc':
                dispatch({
                    type: SORT_TABLE,
                    payload: {
                        records: sortedRecords.reverse(),
                        sortBy,
                        order: 'desc'
                    }
                });
                break;
            case 'desc':
                dispatch({
                    type: SORT_TABLE,
                    payload: {
                        records: sortedRecords,
                        sortBy,
                        order: 'asc'
                    }
                });
                break;
            default: dispatch({
                type: SORT_TABLE,
                payload: {
                    records: sortedRecords,
                    sortBy,
                    order: 'asc'
                }
            })
        }
    } else {
        dispatch({
            type: SORT_TABLE,
            payload: {
                records: sortedRecords,
                sortBy,
                order,
            }
        })
    }
};