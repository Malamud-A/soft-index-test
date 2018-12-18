import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getTable, deleteRecord, sortTable } from "../actions/table.action";
import Table from '../../Components/Table/Index'

const mapStateToProps = ({ table }) => ({
    records: table.records,
    sortBy: table.sortBy,
    order: table.order,
});

const mapDispatchTopProps = (dispatch) => bindActionCreators({
    getTable,
    deleteRecord,
    sortTable,
}, dispatch);

export default connect(mapStateToProps, mapDispatchTopProps)(Table)