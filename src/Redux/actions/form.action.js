import {ADD_RECORD} from "../constants";

export const addRecordAc = ({firstName, lastName, phone, age}) => (dispatch, getState) => {
    const { table } = getState();
    const records = JSON.parse(localStorage.getItem('records'));
    const data = {
        firstName,
        lastName,
        phone,
        age,
        id: table.records.length + 1,
    };
    if (records){
        records.push(data);
        localStorage.setItem('records', JSON.stringify(records));
    } else {
        localStorage.setItem('records', JSON.stringify([data]))
    }
    dispatch({
        type: ADD_RECORD,
        payload: data,
    });
};