import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Index extends Component {

    async componentDidMount() {
        await this.props.getTable();
        await this.props.sortTable(this.props.sortBy, false);
    }

    handleRecordDelete = e => {
        this.props.deleteRecord(e.currentTarget.dataset.id);
    };

    handleTableSort = e => {
        this.props.sortTable(e.currentTarget.dataset.fieldName);
    };

    render() {
        return (
            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th onClick={this.handleTableSort} data-field-name="firstName">First Name</th>
                        <th onClick={this.handleTableSort} data-field-name="lastName">Last Name</th>
                        <th onClick={this.handleTableSort} data-field-name="phone">Phone Number</th>
                        <th onClick={this.handleTableSort} data-field-name="age">Age</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                {console.log(this.props.records)}
                {this.props.records.map((record, index) => (
                    <tr key={`record-${index}`}>
                        <td>{record.firstName}</td>
                        <td>{record.lastName}</td>
                        <td>{record.phone}</td>
                        <td>{record.age}</td>
                        <td data-id={record.id} onClick={this.handleRecordDelete}><FontAwesomeIcon icon={faTrashAlt}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default Index;