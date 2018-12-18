import React, {Component} from 'react';
import InputField from './InputField';

class Index extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        age: '',
    };

    initialState = {
        firstName: '',
        lastName: '',
        phone: '',
        age: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addRecordAc(this.state);
        this.setState(this.initialState);
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className="add-form">
                <form>
                    <InputField
                        handleChange={this.handleInputChange}
                        name="firstName"
                        id="firstNameField"
                        label="First Name"
                        value={this.state.firstName}
                    />
                    <InputField
                        handleChange={this.handleInputChange}
                        name="lastName"
                        id="lastNameField"
                        label="Last Name"
                        value={this.state.lastName}
                    />
                    <InputField
                        handleChange={this.handleInputChange}
                        name="phone"
                        id="phoneField"
                        label="Phone"
                        value={this.state.phone}
                    />
                    <InputField
                        handleChange={this.handleInputChange}
                        name="age"
                        id="ageField"
                        label="Age"
                        type="number"
                        value={this.state.age}
                    />
                    <button onClick={this.handleSubmit} type="submit">Add Record</button>
                </form>
            </div>
        );
    }
}

export default Index;