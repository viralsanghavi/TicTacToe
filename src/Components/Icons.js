import React from 'react'
import './Icons.css'
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
export const Icons = ({ name }) => {
    switch (name) {
        case 'cross':
            return <ClearIcon className="icons" />;
        case 'circle':
            return <RadioButtonUncheckedIcon className="icons" />;
        default:
            return null
            
    }

}


