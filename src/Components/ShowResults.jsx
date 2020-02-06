import React from 'react';

const Results = ({ searchInput }) => {
  return (
    <div className='search_results'>
      <p className='search_show'>Results for: {searchInput}</p>
    </div>

  );
};

export default Results;