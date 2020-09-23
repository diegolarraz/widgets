import React, { useState } from 'react';

//props can be refactored by specifying like this 
const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    // call back function arrowed as usual
    const onTitleClick = (index) => {
        if (index === activeIndex) {
            return setActiveIndex(null);
        }
        setActiveIndex(index);
    }

    const renderdItems = items.map((item, index) => {
        // active class deals with rendering the open segment so conditional
        // used to activate the class or leave as an empty string
        
        const active = index === activeIndex ? 'active' : ''

        //use react fragment to avoid double divs
        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );  
    });

    return <div className="ui styled accordion">
        {renderdItems}
    </div>
};

export default Accordion;