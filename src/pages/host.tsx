import React, {useEffect} from 'react';

export default function HostRedirect(): JSX.Element {
    useEffect(() => {
        // replace() so “Back” doesn’t land here again
        window.location.replace('https://client.enviromc.host/?affid=143');
    }, []);

    return (
        <noscript>
        JavaScript is required to redirect—please click{' '}
        <a href="https://client.enviromc.host/?affid=143">here</a>.
        </noscript>
    );
}
