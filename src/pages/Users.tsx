import * as React from 'react';
import IndexTable from '../components/IndexTable'

import SearchCard from '../components/SearchCard'

const UsersPage: React.FC = () => {


  return (
    <div className="index-wrapper">
        <SearchCard />
        <hr></hr>
        <p className="table-heading">
          Users
        </p>
        <IndexTable columnHeaders={["First Name", "Last Name", "Username", "Reset Link" ]}/>
    </div>
  )
};

export default UsersPage;