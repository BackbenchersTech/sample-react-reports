import React from 'react'; 

import './style.css';

class ErrorMessage extends React.Component {
    render() {
        return (
            <p className="errMsg">Username or password is invalid.</p>
        );
    }
}

export default ErrorMessage;