import Table from 'react-bootstrap/Table';
import AddCard from '../components/AddCard';
import React, {useEffect} from 'react';

interface IndexTableProps {
  columnHeaders: Array<String>
  entity: String
  userData?: Array<any>
}

function IndexTable(props: IndexTableProps){  

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
    {props.entity === "User" && props.userData && props.userData.map((userObj: any) => {
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