import React from 'react';

const LeftTORight = ({recipe}) => {
    const { image} = recipe
    return (
        <div className=" shadow-xl  mt-5 h-80 w-96 border-black  rounded-lg bg-slate-300">
            <div className={`h-full w-full bg-cover rounded-lg`} style={{ 'backgroundImage': `url(${image} )` }}>
            </div>
        </div>
    );
};

export default LeftTORight;