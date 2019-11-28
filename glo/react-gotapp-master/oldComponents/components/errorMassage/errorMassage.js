import React from 'react';
import './erorMassage.css';
const ErrorMassage = () => {
    return (
        <>
        <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"></img>
        <span>Something goes wrong!</span>
        </>
    )
}

export default ErrorMassage;