import React from 'react'
import ItemList from '../learn/ItemList'
import DefaultLayout from "../../DefaultLayout";
import { Container } from 'react-bootstrap';
import Checkbox from '../learn/Checkbox';
const Quizes = () => {
    const quizes = [
        {
            id: 1,
            title: "Par's morning",
            checked: true,
        },
        {
            id: 2,
            title: "Par's friend"
        },
        {
            id: 3,
            title: "Dinner for Par",
            checked: true,
        },
        {
            id: 4,
            title: "Par on vacation",
            checked: true,
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
                <ItemList title="Quizes" data={quizes} link={'/quiz'}>
                    checkbox
                </ItemList>
            </Container>
        </DefaultLayout>
    )
}

export default Quizes;