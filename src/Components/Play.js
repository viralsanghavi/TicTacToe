import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Play.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingsIcon from '@material-ui/icons/Settings';

import { Card, CardBody, Container, Col, Row, Button } from 'reactstrap'
import { Icons } from './Icons';
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

const itemArray = new Array(9).fill("empty");

const Play = () => {
    const [{ start }] = useStateValue()
    const [isCross, setIsCross] = useState(start === "cross" ? true : false);
    const [winMessage, setWinMessage] = useState("");

    const reload = () => {
        // setIsCross(false)
        setWinMessage("")
        itemArray.fill("empty", 0, 9)
    }
    // const plusScore = () => setScore(score + 1)

    const checkIsWinner = () => {
        if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[1] &&
            itemArray[0] === itemArray[2]
        ) {
            setWinMessage(`${itemArray[0]} wins`);

        } else if (
            itemArray[3] !== "empty" &&
            itemArray[3] === itemArray[4] &&
            itemArray[3] === itemArray[5]
        ) {
            setWinMessage(`${itemArray[3]} wins`);
        } else if (
            itemArray[6] !== "empty" &&
            itemArray[6] === itemArray[7] &&
            itemArray[6] === itemArray[8]
        ) {
            setWinMessage(`${itemArray[6]} wins`);


        }
        else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[3] &&
            itemArray[0] === itemArray[6]
        ) {
            setWinMessage(`${itemArray[0]} wins`)

        }
        else if (
            itemArray[1] !== "empty" &&
            itemArray[1] === itemArray[4] &&
            itemArray[1] === itemArray[7]
        ) {
            setWinMessage(`${itemArray[1]} wins`)

        }
        else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[5] &&
            itemArray[2] === itemArray[8]
        ) {
            setWinMessage(`${itemArray[2]} wins`)

        }
        else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[4] &&
            itemArray[0] === itemArray[8]
        ) {
            setWinMessage(`${itemArray[0]} wins`)

        }
        else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[4] &&
            itemArray[2] === itemArray[6]
        ) {
            setWinMessage(`${itemArray[2]} wins`)

        }
        else if (
            itemArray.includes("empty") === false && winMessage === ''
        ) { setWinMessage(`Draw`) }
    }

    const changeItem = itemNumber => {
        if (winMessage) {
            toast(winMessage, { type: "success" })
        }
        if (itemArray[itemNumber] === "empty" && winMessage === "") {
            itemArray[itemNumber] = isCross ? "cross" : "circle"
            setIsCross(!isCross)

        } else {
            if (winMessage === "")
                return (toast("Already filled", { type: "error" }))
        }
        checkIsWinner();
    }

    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3 play__grid">
                    <div className="play__info">
                        <h3>Viral</h3>
                        <Button className="play__scoreButton" > 0 - 0 </Button>
                        <h3>AI</h3>
                    </div>
                    <div className="play_winmessage">
                        {winMessage ? (<div className="mb-2 winmessage mt-2">
                            {/* h1.text-primary.text-uppercase.text-center */}
                            <h3 className="text-uppercase text-center">
                                {winMessage}
                            </h3>
                            <button className="btn btn-primary" onClick={reload}>Restart</button>
                        </div>)
                            : ""}
                    </div>
                    <div className="grid">
                        {itemArray.map((item, index) =>
                            (
                                <Card onClick={() => changeItem(index)} key={index}>
                                    <CardBody className="box">
                                        {item !== "empty" ? <Icons name={item} /> : ""}
                                    </CardBody>
                                </Card>
                            ))}
                    </div>
                    <div className="play__setting">
                        <IconButton className="startgame__buttonWhite" color="primary">
                            <SettingsIcon />
                        </IconButton>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Play;
