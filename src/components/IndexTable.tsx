import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import React, {useState} from 'react';
import axiosClient from '../configs/axiosConfig';
import {Dispatch, SetStateAction} from 'react';


const generator = require('generate-password');

interface IndexTableProps {
  columnHeaders: Array<String>
  entity: String
  userData?: Array<any>
  createAble: boolean
  setCreatable?: Dispatch<SetStateAction<boolean>>;
  setUserData?: Dispatch<SetStateAction<boolean>>;
  fetchUsers?: Function;
  bottomRef?: any;
}

interface IUserObject {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  username: string;
  role: string;
  passwordReset: boolean;
  password: string;
}

interface IEditUserObj {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  username: string;
  role: string;
  userId: string
}

function IndexTable(props: IndexTableProps){  

  const [editable, setEditable] = useState<boolean>(false);
  const [editableId, setEditableId] = useState<string>("");
  const [tempPassword, setTempPassword] = useState<string>("");
  const [userEditedFlash, setUserEditedFlash] = useState<boolean>(false);
  

  const createAction = ():void =>{

    let dataObj: any;
    let password = generator.generate({
      length: 6,
      numbers: true
    })

    if (props.entity === "User") {
      let userObj: IUserObject = {
        firstName: (document.getElementById("firstname") as HTMLInputElement).value,
        lastName: (document.getElementById("lastname") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        mobilePhone: (document.getElementById("phone") as HTMLInputElement).value,
        username: (document.getElementById("username") as HTMLInputElement).value,
        role: (document.getElementById("role-options") as HTMLInputElement).value,
        passwordReset: true,
        password: password
      }
      dataObj = userObj
    }

    axiosClient.post('user', dataObj)
    .then((res: any) => {
      if (res.status === 200) {
        setTempPassword(tempPassword)
        if (props.setCreatable){
          props.setCreatable(false)
          if (props.fetchUsers) {
            props.fetchUsers()
            setTempPassword(password)
            window.scrollTo(0,0);
          }
        }
      }
    })
  }

  const editAction = ():void => {
    let userObj: IEditUserObj = {
      userId: editableId,
      firstName: (document.getElementById("edit-firstname") as HTMLInputElement).value,
      lastName: (document.getElementById("edit-lastname") as HTMLInputElement).value,
      email: (document.getElementById("edit-email") as HTMLInputElement).value,
      mobilePhone: (document.getElementById("edit-phone") as HTMLInputElement).value,
      username: (document.getElementById("edit-username") as HTMLInputElement).value,
      role: (document.getElementById("edit-role-options") as HTMLInputElement).value,
    }
    
    axiosClient.put(`user/${userObj.userId}`, userObj)
    .then((res: any) => {
      if(res.status === 200) {
        setEditable(false)
        if(props.fetchUsers){
          props.fetchUsers()
          setUserEditedFlash(true)
          window.scrollTo(0,0);
        }
      }
    })
  }

  const editableOnClick = (event: any):void => {
    setEditable(true)
    setEditableId(event.target.parentElement.getElementsByTagName('td')[0].innerHTML)
  }

  return (
    <div ref={props.bottomRef}>
      {userEditedFlash && <Alert variant='success' onClose={()=> setUserEditedFlash(false)} dismissible>User successfully updated!</Alert>}
      {tempPassword &&
        <Alert variant='success' onClose={()=> setTempPassword("")} dismissible>
          <Alert.Heading>User Created!</Alert.Heading>
            <p>
              Please provide this password to the user. They will be prompted to change it on the first login.
              You will not have access to this password when you close this popup. Should this occur then reset the users password.
            </p>
            <hr />
            <p className="mb-0">
              The users temp password is: {`${tempPassword}`}
            </p>
        </Alert>
      }
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
            if (!editableId || editableId && editableId != userObj.userId){
              return (
              <tr onClick={editableOnClick}>
              
                <>
                  <td id={`${userObj.userId}`}>{userObj.userId}</td>
                  <td>{userObj.fullName}</td>
                  <td>{userObj.username}</td>
                  <td>{userObj.email}</td>
                  <td>{userObj.phone}</td>
                  <td>{userObj.role}</td>
                  <td>{userObj.resetLink}</td>
                </>
              </tr>         
            )
            }
          })}

          { editable === true && props.userData && props.userData.map((userObj)=>{
            if (userObj.userId === editableId) {
              return (
                <tr>
                  <td>
                    * not editable
                  </td>
                  <td>
                    <input id="edit-firstname" type="text" name="firstname" defaultValue={`${userObj.fullName.split(" ")[0]}`}/>
                    <input id="edit-lastname" type="text" name="secondname" defaultValue={`${userObj.fullName.split(" ")[1]}`}/>
                  </td>
                  <td>
                    <input id="edit-username" type="text" name="username" defaultValue={`${userObj.username}`}/>
                  </td>
                  <td>
                    <input id="edit-email" type="text" name="email" defaultValue={`${userObj.email}`}/>
                  </td>
                  <td>
                    <input id="edit-phone" type="text" name="phone" defaultValue={`${userObj.phone}`}/>
                  </td>
                  <td>
                    <select id="edit-role-options" name="roles">
                      <option value="Trainee">Trainee</option>
                      <option value="Trainer">Trainer</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td> 
                  <td>
                    * not editable</td>  
                  <td><button onClick={editAction}>save</button></td>           
                </tr>
              )
            }
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
                <input id="username" type="text" name="username" placeholder="username"/>
              </td>
              <td>
                <input id="email" type="text" name="email" placeholder="email"/>
              </td>
              <td>
                <input id="phone" type="text" name="phone" placeholder="phone"/>
              </td>
              <td>
                <select id="role-options" name="roles">
                  <option value="Trainee">Trainee</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
              <td>
                * Populated on save
              </td>
              <td><button onClick={createAction}>save</button></td>
            </tr>
          }
        </tbody >
      </Table>
      <hr></hr>
    </div>
  )
};

export default IndexTable;