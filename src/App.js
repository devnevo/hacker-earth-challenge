import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import UserInfo from "./Components/UserInfo";
import UserList from "./Components/UserList";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [searchText, setText] = useState('');

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);

  const getAllUsers = async () => {
    const allUsers = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
    setAllUsers(allUsers.data);
  };

  const onAction = (type, person) => {
    if(type == 'accept'){
      let original = selectedUsers.filter(item => item.id == person.id);
      if(!original.length){
        setSelectedUsers([...selectedUsers, person]);
      }
    } else if(type == 'reject'){
      let original = rejectedUsers.filter(item => item.id == person.id);
      if(!original.length){
        setRejectedUsers([...rejectedUsers, person]);
      }
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const filteredData = allUsers.filter(
    item =>
      item.name.toLocaleLowerCase().includes(searchText)
  );

  const itemsToDisplay = searchText ? filteredData : allUsers;

  return (
    <div className="wrapper">
      <div className="navBar"></div>
        <Route path="/" exact render={()=><Homepage itemsToDisplay={itemsToDisplay} setText={setText}/>}/>
        <Route path="/:id" exact render={()=><UserInfo allUsers={itemsToDisplay} onAction={onAction} selectedUsers={selectedUsers} rejectedUsers={rejectedUsers}/>}/>
        <Route path="/shortlisted" render={()=><UserList usersList={selectedUsers} isSelectedList={true}/>}/>
        <Route path="/rejectlist" render={()=><UserList usersList={rejectedUsers} isSelectedList={false}/>}/>
    </div>  
  );
}

export default App;
