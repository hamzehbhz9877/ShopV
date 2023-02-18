import React from 'react';

const UseToCommas = () => {
    function toCommas(value:number) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return {toCommas}
};

export default UseToCommas;