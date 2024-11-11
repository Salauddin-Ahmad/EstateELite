import React from 'react';

const Spinner = () => {
    return <>
        <div className="flex justify-center items-center pt-28" >
            <div className="  w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>
    </>
};

export default Spinner;