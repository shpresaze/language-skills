import React, { useState } from 'react'

const Question = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    return (
        <>
            <div className='bg-light my-2 p-2'>
                <h4>{props.question}</h4>
                <p>Answers</p>
                <ul>
                    {
                        props.replays.map((replay) => <li key={replay.id}>
                            {replay.answer}
                        </li>)
                    }
                </ul>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.onSave(props.id, enteredValue);
                    setEnteredValue('');
                }} className='ms-5'>

                    <label htmlFor="question">
                        <input type="text" id="replay" name='replay' value={enteredValue} onChange={e => setEnteredValue(e.target.value)} />
                    </label>
                    <input type="Submit" value='Replay' />
                </form>
            </div>

        </>
    )
}

export default Question