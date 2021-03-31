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
        <IndexTable columnHeaders={["Full Name", "Username", "Email", "Phone", "Role", "Password Reset" ]} entity="User"/>
    </div>
  )
};

export default UsersPage;