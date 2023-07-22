import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const collage = useLoaderData();
    const { collegeName } = collage;

    console.log(collage);

    return (
        <div>
            <h1>Details pages { collage.length}</h1>
        <h1>{collegeName}</h1>
      </div>
    );
};

export default Details;