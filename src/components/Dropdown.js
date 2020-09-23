import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // useEffect utilised to only setup an event listener once 
    // the dropdown is rendered. Event listener closes the dropdown
    // only IF the body outside has been clicked therefore we use USEREF
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

            return () => {
                document.body.removeEventListener('click', onBodyClick);
            };
    }, []);

    const renderedOptions = options.map((option) => {
        
        // avoid double display
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => {
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    //good way to activate css use ternary ops inline and play with state
    // , no function needed

    return (
        <div ref={ref} className="ui form container drop-down">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => {
                    setOpen(!open);
                }} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;