import React from "react";
import {Link, useParams} from "react-router-dom";
import UserCard from "./UserCard";
import "../App.css";

function UserInfo({ allUsers, onAction, selectedUsers, rejectedUsers}) {
  const {id} = useParams();
  const user = allUsers.filter(user => user.id == id)[0];
  const isSelected = user && selectedUsers.filter(item => item.id === user.id).length;
  const isRejected = user && rejectedUsers.filter(item => item.id === user.id).length;
  return (
      <div>
        {user ? (
          <div className="userInfo">
              <div className="child-1">
                <UserCard userInfo={user}/>
              </div>
              <div className="child-2">
                {!(isSelected || isRejected) ? (<div>
                  <button onClick={() => onAction('accept', user)} className="btn accept-btn">Shortlist</button>
                  <button onClick={() => onAction('reject', user)} className="btn reject-btn">Reject</button>
                </div>) : isSelected ? 'User Shortlisted!' : 'User Rejected!'}
              </div>
              <Link className="btn child-3" to='/'>Back</Link>
          </div>
        ) : null}
    </div>
  );
}

export default UserInfo;
