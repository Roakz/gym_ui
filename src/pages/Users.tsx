import * as React from 'react';
import IndexTable from '../components/IndexTable'
import SearchCard from '../components/SearchCard'
import axiosInstance from '../configs/axiosConfig';
import {useState, useEffect} from 'react';
import AddCard from '../components/AddCard';

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
  const [createAble, setCreatable] = useState<boolean>(false);

  function fetchUsers() {
    axiosInstance.get('user')
    .then(async (res: any) => {
      let tempArray: Array<IUserObject> = [];
      await res.data.documents.map((doc: any) => {
        let obj: IUserObject = {
          userId: doc._id,
          fullName: doc.firstName + " " + doc.lastName,
          username: doc.username,
          email: doc.email,
          phone: doc.mobilePhone,
          resetLink: 'Some link here',
          role: doc.role
        };
        tempArray.push(obj);
      });
      setUserData(tempArray);
    });
  };

  useEffect(() => {
    fetchUsers()
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
        createAble={createAble}
        setCreatable={setCreatable}
        setUserData={setUserData}
        fetchUsers={fetchUsers}
      />
      <AddCard entity="User" setCreatable={setCreatable}/>
    </div>
  );
}

export default UsersPage;