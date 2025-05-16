import React, {useEffect} from 'react';

export default function DiscordRedirect(): JSX.Element {
    useEffect(() => {
        // replace() so “Back” doesn’t land here again
        window.location.replace('https://discord.com/invite/uMNHtUK');
    }, []);

    return (
        <noscript>
        JavaScript is required to redirect—please click{' '}
        <a href="https://discord.com/invite/uMNHtUK">here</a>.
        </noscript>
    );
}
