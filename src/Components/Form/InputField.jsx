import React from 'react'

const InputField = ({handleChange, label, type = 'text', ...rest}) => (
    <React.Fragment>
        {!!label &&
        <label htmlFor={rest.id}>
            {label}
        </label>
        }
        <input
            onChange={handleChange}
            type={type}
            {...rest}
        />
    </React.Fragment>
);

export default InputField;