import * as React from 'react';
import SearchCard from '../components/SearchCard';
import IndexTable from '../components/IndexTable';

const TraineePage: React.FC = () => {
  return (
    <div className="index-wrapper">
        <SearchCard />
        <hr></hr>
        <p className="table-heading">
          Trainees
        </p>
        <IndexTable
          columnHeaders={["Full Name", "Current Plan", "Latest Media" ]} 
          entity="Trainee"
          createAble={false}
        />
    </div>
  )
};

export default TraineePage;