import React, {useEffect} from 'react';

export default function VoteRedirect(): JSX.Element {
    useEffect(() => {
        // replace() so “Back” doesn’t land here again
        window.location.replace('https://www.ogcraft.org/docs/Info/Voting');
    }, []);

    return (
        <noscript>
        JavaScript is required to redirect—please click{' '}
        <a href="https://www.ogcraft.org/docs/Info/Voting">here</a>.
        </noscript>
    );
}
