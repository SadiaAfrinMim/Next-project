

import React from 'react';

const CatchAllRoute =async ({params}:{params:Promise<{slug:string[]}>}) => {
    return (
        <div>
           <h1 className='text-4xl'>CatchAllRoute</h1> 
        </div>
    );
};

export default CatchAllRoute;