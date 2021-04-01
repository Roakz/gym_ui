import Table from 'react-bootstrap/Table';
import AddCard from '../components/AddCard';
import React, {useEffect} from 'react';

interface IndexTableProps {
  columnHeaders: Array<String>
  entity: String
  userData?: Array<any>
  createAble: boolean
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
          { props.createAble && 
          <tr>
            <td>
              * Populated on save
            </td>
            <td>
              <input id="firstname" type="text" name="firstname" placeholder="firstname"/>
              <input id="lastname" type="text" name="secondname" placeholder="secondname"/>
            </td>
            <td>
              <input id="username" type="text" name="username"/>
            </td>
            <td>
              <input id="email" type="text" name="email"/>
            </td>
            <td>
              <input id="phone" type="text" name="phone"/>
            </td>
            <td>
              <select id="cars" name="cars">
                <option value="trainee">Trainee</option>
                <option value="trainer">Trainer</option>
                <option value="admin">Admin</option>
              </select>
            </td>
            <td>
              * Populated on save
            </td>
            <td><button>save</button></td>
          </tr>
          }
        </tbody>
      </Table>
      <hr></hr>
    </>
  )
};

export default IndexTable;