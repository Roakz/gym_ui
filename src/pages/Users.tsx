import * as React from 'react';
import IndexTable from '../components/IndexTable'

import SearchCard from '../components/SearchCard'

const UsersPage: React.FC = () => {
  return (
    <div className="index-wrapper">
        <SearchCard />
        <p className="table-heading">
          Users
        </p>
        <IndexTable />
    </div>
  )
};

export default UsersPage;