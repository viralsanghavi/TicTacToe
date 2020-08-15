import React from 'react'
import Card from '@material-ui/core/Card';
import './Play.css'

const itemArray = new Array(9).fill("empty");

const Board = () => {
    return (
        <div className="board">
            <div className="board__grid">
                {itemArray.map(item =>
                    <Card>
                        {item}
                </Card>
                )}
            </div>
        </div>
    )
}

export default Board
