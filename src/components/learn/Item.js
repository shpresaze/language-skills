import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Checkbox from './Checkbox'
import AudioPlayer from './AudioPlayer'

const Item = (props) => {
    return (
        <Link to={props.link} className="nav-link text-dark">
            <Col xs={12} md={9} className="border d-flex justiy-content-between align-items-center my-3 py-5 mx-auto bg-light" style={{ height: "50px" }}>
                <Col xs={12} md={6} className='w-50 position-relative'>
                    <Image src={props.imgSrc} className="img-thumbnail position-absolute" style={{
                        bottom: '-20px'
                        , width: '75px', height: "75px"
                    }} />
                    <span className="ms-5 ps-5">{props.title}</span>
                </Col>
                <Col xs={12} md={6} className='w-50 pe-4 text-end'>
                    {
                        props.children === 'checkbox' ?
                            <Checkbox checked={props.checked} />
                            : props.children === 'audio' ? <AudioPlayer link={props.audioLink} /> : ''
                    }
                </Col>
            </Col>
        </Link>
    )
}

export default Item