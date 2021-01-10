import React from "react";
import {Link} from "react-router-dom";
import "../App.css";
import UserCard from "./UserCard";

function UserList({ usersList, isSelectedList}) {
  return (
    <div className="userListing">
        <div className="backBtn">
            <Link className="btn class-3" to='/'>Back</Link>    
        </div>
        <div>
            <h1>
                {isSelectedList ? 'ShortListed Users' : 'Rejected Users'}
            </h1>
            <div className="user-cards">
                {usersList.map((user) => (
                    <UserCard userInfo={user}/>
                ))} 
            </div>
        </div>
        {usersList.length < 1 ? 'Nothing to display' : null}
    </div>

  );
}

export default UserList;
