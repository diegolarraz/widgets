import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
    // const [selected, setSelected] = useState(options[0]);
    // const [toggled, setToggled] = useState(false);
    return (
        
        <div>
            {/* <button onClick={() => setToggled(!toggled)}>Toggle Dropdown</button> */}
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* { toggled ? (<Dropdown selected={selected} onSelectedChange={setSelected} options={options} />) : null } */}
            <Translate />
        </div>
    );
};