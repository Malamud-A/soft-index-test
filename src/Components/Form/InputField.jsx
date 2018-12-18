import React from 'react'

const InputField = ({handleChange, label, type = 'text', value, ...rest}) => (
    <div className="form-field">
        <input
            className={value ? 'dirty' : ''}
            onChange={handleChange}
            type={type}
            value={value}
            {...rest}
        />
        {!!label &&
        <label htmlFor={rest.id}>
            {label}
        </label>}
    </div>
);

export default InputField;