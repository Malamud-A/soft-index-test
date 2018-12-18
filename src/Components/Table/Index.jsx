import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';

class Index extends Component {

    async componentDidMount() {
        await this.props.getTable();
        await this.props.sortTable(this.props.sortBy, false);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.records.length !== this.props.records.length){
            this.props.sortTable(this.props.sortBy, false);
        }
    }


    handleRecordDelete = e => {
        this.props.deleteRecord(e.currentTarget.dataset.id);
    };

    handleTableSort = e => {
        this.props.sortTable(e.currentTarget.dataset.fieldName);
    };

    render() {
        return (
            <div className="records-table">
                <table cellPadding="0" cellSpacing="0">
                    <thead>
                    <tr>
                        <th
                            onClick={this.handleTableSort}
                            data-field-name="firstName"
                        >First Name
                            <span className={`sort-icon ${this.props.sortBy === 'firstName' ? 'active' : ''}`}>
                                <FontAwesomeIcon className={`${this.props.order === 'asc' ? 'active' : ''}`} icon={faSortUp}/>
                                <FontAwesomeIcon className={`${this.props.order === 'desc' ? 'active' : ''}`} icon={faSortDown} />
                            </span>
                        </th>
                        <th
                            onClick={this.handleTableSort}
                            data-field-name="lastName"
                        >Last Name
                            <span className={`sort-icon ${this.props.sortBy === 'lastName' ? 'active' : ''}`}>
                                <FontAwesomeIcon className={`${this.props.order === 'asc' ? 'active' : ''}`} icon={faSortUp}/>
                                <FontAwesomeIcon className={`${this.props.order === 'desc' ? 'active' : ''}`} icon={faSortDown} />
                            </span>
                        </th>
                        <th
                            onClick={this.handleTableSort}
                            data-field-name="phone"
                        >Phone Number
                            <span className={`sort-icon ${this.props.sortBy === 'phone' ? 'active' : ''}`}>
                                <FontAwesomeIcon className={`${this.props.order === 'asc' ? 'active' : ''}`} icon={faSortUp}/>
                                <FontAwesomeIcon className={`${this.props.order === 'desc' ? 'active' : ''}`} icon={faSortDown} />
                            </span>
                        </th>
                        <th
                            colSpan='2'
                            onClick={this.handleTableSort}
                            data-field-name="age"
                        >Age
                            <span className={`sort-icon ${this.props.sortBy === 'age' ? 'active' : ''}`}>
                                <FontAwesomeIcon className={`${this.props.order === 'asc' ? 'active' : ''}`} icon={faSortUp}/>
                                <FontAwesomeIcon className={`${this.props.order === 'desc' ? 'active' : ''}`} icon={faSortDown} />
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.records.map((record, index) => (
                        <tr key={`record-${index}`}>
                            <td>{record.firstName}</td>
                            <td>{record.lastName}</td>
                            <td>{record.phone}</td>
                            <td>{record.age}</td>
                            <td data-id={record.id} onClick={this.handleRecordDelete}><FontAwesomeIcon
                                icon={faTrashAlt}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Index;