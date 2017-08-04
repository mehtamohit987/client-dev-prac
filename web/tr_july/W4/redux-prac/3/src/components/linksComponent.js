import React from 'react';
import FilterLinkContainer from '../containers/filterLinkContainer';

const Links = () => (
  <p>
    Show:
    {' '}
    <FilterLinkContainer filter='SHOW_ALL'>
      All
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter='SHOW_ACTIVE'>
      Active
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter='SHOW_COMPLETED'>
      Completed
    </FilterLinkContainer>
  </p>
);

export default Links;