import React from 'react'
import './Icons.css'
// import ClearIcon from '@material-ui/icons/Clear';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
export const Icons = ({ name }) => {
    switch (name) {
        case 'cross':
            return <img src={require('../assets/cross.svg')} className="icons" />;
        case 'circle':
            return <img src={require("../assets/circle.svg")} className="icons" />;
        default:
            return null

    }

}


