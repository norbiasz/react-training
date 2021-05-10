import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
    return (
        <form>
            <input placeholder="Filter:" type="text" onChange={props.onFilterChange} value={props.filter} className="p-3 mb-3" />
        </form>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
};


export default Filter;