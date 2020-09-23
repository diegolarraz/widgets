import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Search = () => {
    const [term, setTerm] = useState('code');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // split into two different use effects in order to get 1 api request instead of two
    // always check that with more than one piece of state in the array can complicate things
    // you can always split them to fix this issue
    // in this case we check debouced term to when it changes and updates calls the
    // second use state there for API request only takes place when the debouced updates
   
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        
        const search = async () => {
            console.log("this is a request");
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResults(data.query.search);
        };

        if (debouncedTerm) {
            search();
        }

    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        if (term) {
            return (
                <div key={result.pageid} className="item">
                    <div className="right floated content">
                        <a 
                            className="ui button" 
                            href={`https://en.wikipedia.org?curid=${result.pageid}`}
                            target="_blank"
                        >
                            Go
                        </a>
                    </div>
                    <div className="content">
                        <div className="header">
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </div>
                </div>
            );
        };
    });

    return (
        <div className="ui container segment">
            <div className="ui form">
                <div className="field">
                    <label>Begin search</label>
                    <input 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)} 
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;