import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getTable, deleteRecord } from "../actions/table.action";
import Table from '../../Components/Table/Index'

const mapStateToProps = ({ table }) => ({
    records: table.records
});

const mapDispatchTopProps = (dispatch) => bindActionCreators({
    getTable,
    deleteRecord,
}, dispatch);

export default connect(mapStateToProps, mapDispatchTopProps)(Table)