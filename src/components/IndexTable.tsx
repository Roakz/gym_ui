import Table from 'react-bootstrap/Table';
import AddCard from '../components/AddCard';
import React, {useEffect} from 'react';

interface IndexTableProps {
  columnHeaders: Array<String>
  entity: String
}

interface ITempUserObject {
  userId: string;
  fullName: string;
  username: string;
  resetLink: string;
  email: string;
  phone: string;
  role: string;
}

// Remove when api calls are made
const tempUserData: Array<ITempUserObject> = [
  {
    userId: '1234567',
   fullName: 'Robert Bell',
   username: 'Bellr',
   email: "foo@bar.com",
   phone: "0437989465",
   resetLink: 'Some link here',
   role: "Trainee"
  },
  {
    userId: '1234568',
   fullName: 'Amanada hugandkiss',
   username: 'Hugandkiss',
   email: "Amanada@bar.com",
   phone: "0437939857",
   resetLink: 'Some link here',
   role: "Trainee"
  },
  {
    userId: '1234569',
   fullName: 'Kinder Surprise',
   username: 'Kinder',
   email: "Kinder@bar.com",
   phone: "0437985986",
   resetLink: 'Some link here',
   role: "Trainee"
  },
  {
    userId: '1234570',
   fullName: 'Ken Dell',
   username: 'Dellk',
   email: "Dellk@bar.com",
   phone: "0437989452",
   resetLink: 'Some link here',
   role: "Admin"
  },
  {
    userId: '1234571',
   fullName: 'Emillia Camellia',
   username: 'EmCall',
   email: "Emillia@bar.com",
   phone: "0437985239",
   resetLink: 'Some link here',
   role: "Trainer"
  }
]

function IndexTable(props: IndexTableProps){  

  // useEffect(():void => {
  //   // Make an API call to retrieve user data.
  // })

  return (
    <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>{props.entity + "Id"}</th>
      {props.columnHeaders.map(function(element, index){
        return <th key={index}>{element}</th>
      })}
    </tr>
  </thead>
  <tbody>
    {props.entity === "User" && tempUserData.map((userObj) => {
      return (
        <tr>
        <td>{userObj.userId}</td>
        <td>{userObj.fullName}</td>
        <td>{userObj.username}</td>
        <td>{userObj.email}</td>
        <td>{userObj.phone}</td>
        <td>{userObj.role}</td>
        <td>{userObj.resetLink}</td>
      </tr> 
      )
    })}
     
  </tbody>
  </Table>
  <hr></hr>
  { props.entity !== "Trainee" &&  <AddCard entity={props.entity}/> }
  </>
  )
};

export default IndexTable;