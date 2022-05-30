import React, { useState } from 'react';
import classes from './form.module.css';

const Form = ({ handleSubmit }) => {
    const [values, setValues] = useState({ name: "", email: "", message: "" });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const handleFormSubmit = () => {
        handleSubmit(values)
    };
    
    return (
        <form onSubmit={handleFormSubmit} className={classes.Form}>
            <label>
                Your Name:
                <input
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleInputChange} />
            </label>
            <label>
                Your Email:
                <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleInputChange} />
            </label>
            <label>
                Your Message:
                <textarea
                    name="message"
                    type="textarea"
                    value={values.message}
                    onChange={handleInputChange} />
            </label>
            <input className={classes.Submit} type="submit" value="Send" />
        </form>
    )
}

export default Form;