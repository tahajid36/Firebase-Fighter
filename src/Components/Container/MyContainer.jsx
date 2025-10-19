import React from 'react';

const MyContainer = ({className, children}) => {
    return (
<div className={` ${className} mx-auto container `}>
            {children}
        </div>
    );
};

export default MyContainer;