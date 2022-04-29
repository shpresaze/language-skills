import React from 'react'

const Checkbox = (props) => {
    return (
        <input type="checkbox" onClick={e => e.stopPropagation()} defaultChecked={props.checked} style={{ height: "40px", width: "40px" }}></input>
    )
}

export default Checkbox