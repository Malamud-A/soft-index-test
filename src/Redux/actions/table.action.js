import { GET_TABLE, DELETE_RECORD } from "../constants";

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
    if (records){
        const updatedRecords = records.filter(record => record.id !== parseInt(id));
        localStorage.setItem('records', JSON.stringify(updatedRecords));
    }
    dispatch ({
        type: DELETE_RECORD,
        payload: parseInt(id),
    })
};