import React from 'react'
import ItemList from '../learn/ItemList'
import DefaultLayout from "../../DefaultLayout";
import { Container } from 'react-bootstrap';
const Stories = () => {
    const stories = [
        {
            id: 1,
            title: "Par's morning"
        },
        {
            id: 2,
            title: "Par's friend"
        },
        {
            id: 3,
            title: "Dinner for Par"
        },
        {
            id: 4,
            title: "Par on vacation"
        },
        {
            id: 5,
            title: "Par on vacation"
        },
        {
            id: 6,
            title: "Par on vacation"
        },
    ]
    return (
        <DefaultLayout>
            <Container className='custom-green'>
                <ItemList title="Stories" data={stories} link={'/story'}>
                </ItemList>
            </Container>
        </DefaultLayout>
    )
}

export default Stories