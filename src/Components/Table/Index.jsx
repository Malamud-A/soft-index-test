import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Index extends Component {

    componentDidMount() {
        this.props.getTable();
    }

    handleRecordDelete = e => {
        this.props.deleteRecord(e.currentTarget.dataset.id);
    };

    render() {
        return (
            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Age</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                {this.props.records.map(record => (
                    <tr key={`record-${record.id}`}>
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