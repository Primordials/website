import React from 'react';

/**
 * Our  fetch error helper
 * @param {object} response 
 */
export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}


/** 
 * Render change percent helper
 * 
 * refactor from class method to function
 * previously looked like when copied from list component:
 * renderChangePercent(percent) {
 * 
 * @param {string} percent
*/
export const renderChangePercent = (percent) => {
    if (percent > 0) {
        return <span className="percent-raised">{percent}% &uarr;</span>
    }
    else if (percent < 0) {
        return <span className="percent-fallen">{percent}% &darr;</span>
    }
    else {
        return <span>{percent}</span>
    }
}