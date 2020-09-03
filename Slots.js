import React, { useState } from 'react';
// import './Slots.css';

function Slots() {

    const cardArr = ['🂠', '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂸', '🂩', '🂪', '🂫', '🂬', '🂭', '🂮', '🂱', '🂲', '🂳', '🂴', '🂵', '🂷', '🂸', '🂹', '🂺', '🂻', '🂼', '🂼', '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃉', '🃊', '🃋', '🃌', '🃍', '🃎', '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃜', '🃝', '🃞', '🃟'];

    const [cards, setCards] = useState([
        ['a', 'b', 'c']
    ]);

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const newCard = () => {
        let randomNumber = getRandomInt(0, cardArr.length);
        return cardArr[randomNumber];
    }

    const buttonDown = (cards) => {
        let newCardArr = [];
        for (let i = 0; i < 3; i++) {
            newCardArr.push(newCard());
        }
        console.log(newCardArr);
        setCards([...newCardArr]);
    }


    return (
        <div className="Slots">
            <header className="Slots-header">
                SLOTS
        <h1>
                    {cards}
                </h1>
                <span>
                    <button onClick={buttonDown}>start spinning</button>
                </span>
            </header>

        </div>
    );
}

export default Slots;
