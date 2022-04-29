import React from 'react'
import { Container } from 'react-bootstrap'
import DefaultLayout from '../../DefaultLayout'
import DiscussionList from '../learn/DiscussionList'

const Disucssion = () => {
    return (
        <DefaultLayout>
            <Container className='custom-green'>
                <DiscussionList />
            </Container>
        </DefaultLayout>
    )
}

export default Disucssion