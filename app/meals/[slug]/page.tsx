import React from 'react';

interface PageProps {
    params: {
        slug: string;
    };
}

const Page: React.FC<PageProps> = ({ params }) => {
    return (
        <>
            <h1>This is {params.slug}</h1>
        </>
    );
}

export default Page;
