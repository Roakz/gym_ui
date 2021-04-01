import * as React from 'react';
import IndexTable from '../components/IndexTable'
import SearchCard from '../components/SearchCard'
import axiosInstance from '../configs/axiosConfig';
import {useState, useEffect} from 'react';

function UsersPage() {

  interface IUserObject {
    userId: string;
    fullName: string;
    username: string;
    resetLink: string;
    email: string;
    phone: string;
    role: string;
  }


  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    axiosInstance.get('user')
      .then(async (res: any) => {

        let tempArray: Array<IUserObject> = [];

        await res.data.documents.map((doc: any) => {
          let obj: IUserObject = {
            userId: doc._id,
            fullName: doc.firstName + " " + doc.lastName,
            username: doc.username,
            email: doc.email,
            phone: doc.phone,
            resetLink: 'Some link here',
            role: doc.role
          };
          tempArray.push(obj);
        });
        setUserData(tempArray);
      });
  }, []);

  return (
    <div className="index-wrapper">
      <SearchCard />
      <hr></hr>
      <p className="table-heading">
        Users
      </p>
      <IndexTable
        columnHeaders={["Full Name", "Username", "Email", "Phone", "Role", "Password Reset"]}
        entity="User"
        userData={userData}
         />
    </div>
  );
}

export default UsersPage;