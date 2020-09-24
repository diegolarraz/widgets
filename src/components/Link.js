import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        // this is for cmd click open new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        // this prevent def and callback is to avoid the 
        // refresh and lines 14 15 deal with sending an 
        // event to the route component
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    );
};

export default Link;