import * as React from 'react';
import Button from 'react-bootstrap/Button'

const SearchCard: React.FC = () => {
    return (
        <div id="search-card-wrapper">
          <input type="text" name="search" />
          <Button variant="outline-success">Search</Button>
        </div>
    )
}

export default SearchCard;