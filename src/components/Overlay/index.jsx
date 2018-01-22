import React from 'react';

import './style.css';

const Overlay = (props) => {
    var visibility = "hide";
    if(props.visibility) {
        visibility = "show"
    }

    if( window.innerWidth < 769 ) {
        return <div className={ "overlay " + visibility}></div>
    }
    else {
        return <div className={ "overlay hide" }></div>
    }
}

export default Overlay;