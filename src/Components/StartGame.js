import React from 'react'
import { Button } from '@material-ui/core'
import './StartGame.css'
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const StartGame = () => {
    return (
        <div className="startgame">
            <div className="startgame__container">
                <div className="startgame__banner">

                    <img src={require('../assets/cross.svg')} className="startgame__bannerIconBlue" />
                    <img src={require('../assets/circle.svg')} className="startgame__bannerIconOrange" />
                </div>
                <h3>Choose your Play Mode</h3>
                <div className="startgame__button">
                    <Link to='/select'>
                        <Button variant="contained" color="primary" >With Ai</Button>
                    </Link>
                    <Link to="/select">
                        <Button className="startgame__buttonWhite" color="primary">With a friend</Button>
                    </Link>
                </div>
                <IconButton className="startgame__buttonWhite" color="primary">
                    <SettingsIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default StartGame
