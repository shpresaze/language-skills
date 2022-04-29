import React from 'react'

const AudioPlayer = (props) => {
    console.log(props)
    return (
        <audio controls>
            <source src={props.link} />
            Your browser does not support the audio element.
        </audio>
    )
}

export default AudioPlayer