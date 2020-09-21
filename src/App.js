import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is react?',
        content:"hello there you silly goose"
    },
    {
        title: 'How do you use react?',
        content: 'You use react by creating components'
    },
    {
        title: 'Why use react?',
        content: 'because it is cool'
    }
];
export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};