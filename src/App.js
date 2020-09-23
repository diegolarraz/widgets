import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
        label: 'The color red',
        value: 'red'

    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];
export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
        </div>
    );
};