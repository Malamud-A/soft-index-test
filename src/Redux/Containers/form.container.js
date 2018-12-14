import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { addRecordAc } from '../actions/form.action'
import Form from '../../Components/Form/Index';

const mapDispatchToProps = dispatch => bindActionCreators(
    {addRecordAc},
    dispatch
)

export default connect(null, mapDispatchToProps )(Form);
