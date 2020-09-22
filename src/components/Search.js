import React, {useState, useEffect} from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log("hello effect");
    });

    return (
        <div className="ui container segment">
            <div className="ui form">
                <div className="field">
                    <label>Begin search</label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} className="input" />
                </div>
            </div>
        </div>
    );
}

export default Search;