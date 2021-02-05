import React from 'react';

import 'isomorphic-fetch';

import Link from 'next/link';

const Home = ({repositories}) => (
    <div>
        <Link href="./blog">
            <a>Blog</a>
        </Link>
        {repositories.map(r => <h1 key={r.id}>{r.name}</h1>)}
    </div>
);
Home.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
    const repositories = await response.json();
    return { repositories };
}
export default Home;