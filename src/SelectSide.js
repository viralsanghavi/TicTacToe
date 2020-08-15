import React, { useState } from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './SelectSide.css'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useStateValue } from './Components/StateProvider';

const SelectSide = () => {
    const [{ start }, dispatch] = useStateValue()
    const [icon, setIcon] = useState('cross')
    const Selector = () => {
        dispatch({
            type: "SET_SELECT",
            start: icon
        })
    }
    return (
        <div className="selectSide">
            <div className="selectSide__container">
                <h3>Pick your side</h3>
                <div className="selectSide__banner">
                    <div className="selectSide__radio">
                        <input type="radio" id="cross" name="radio-group" value="cross" checked={icon === "cross" ? true : false} onClick={e => setIcon(e.target.value)} />
                        <label htmlFor="cross"><ClearIcon className="startgame__bannerIconBlue" /></label>
                    </div>
                    <div className="selectSide__radio">
                        <input type="radio" id="circle" name="radio-group" checked={icon === "circle" ? true : false} onClick={e => setIcon(e.target.value)} value="circle" />
                        <label htmlFor="circle"><RadioButtonUncheckedIcon className="startgame__bannerIconOrange" /></label>
                    </div>
                </div>
                <div className="startgame__button">
                    <Link to='/start'>
                        <Button className="startgame__buttonWhite" onClick={Selector} >Continue</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SelectSide
