import React, { useState } from 'react'
import Question from './Question';
import Title from "./Title";
const DiscussionList = (props) => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "First Question",
            replays: []
        },
        {
            id: 2,
            question: "Second Question",
            replays: []
        }
    ])


    const [enteredValue, setEnteredValue] = useState('');
    return (
        <>
            <Title title="Discussion" />
            {
                questions.map((question) => <Question key={question.id} {...question} onSave={(id, val) => {
                    setQuestions((prev) => prev.map(q => {
                        if (q.id === id) {
                            return {
                                ...q,
                                replays: [...q.replays, {
                                    id: q.replays.length + 1,
                                    answer: val
                                }]
                            }
                        } else {
                            return q;
                        }
                    }))
                }} />)
            }
            <form onSubmit={(e) => {
                e.preventDefault();
                setQuestions((prev) => [...prev, {
                    id: prev.length + 1,
                    question: enteredValue,
                    replays: []
                }])
                setEnteredValue('');
            }}>

                <label htmlFor="question">
                    <input type="text" id="question" name='question' value={enteredValue} onChange={e => setEnteredValue(e.target.value)} />
                </label>
                <input type="Submit" value='Add' />
            </form>
        </>
    )
}

export default DiscussionList