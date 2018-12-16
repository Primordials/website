import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props) => {

    const { page, totalPages, handlePaginationClick } = props;

    return (
        <div className="Pagination">
            <button
                className="Pagination-button"
                /**
                 * handlePaginationClick('prev')
                 * yeilds 
                 * TypeError: handlePaginationClick is not a function
                 * 
                 * why? these functions will be called immidiately on load instad of onclick
                 * and how do we add arguments?
                 * one of two ways:
                 * 
                 * how to solve? () => or example two
                 */
                onClick={() => handlePaginationClick('prev')}
                disabled={page <= 1}
            >
                &larr;
            </button>

            <span className="Pagination-info">
                page <b>{page}</b> of <b>{totalPages}</b>
            </span>

            <button
                className="Pagination-button"
                /**
                * Example 2
                * onClick={handlePaginationClick.bind(this, 'next')}
                * but this doesnt seem to work as intended?
                */
                onClick={() => handlePaginationClick('next')}
                disabled={page >= totalPages}
            >
                &rarr;
            </button>
        </div>
    )
}

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination;