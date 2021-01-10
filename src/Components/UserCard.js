import React from "react";
import {Link} from "react-router-dom";
import "../App.css";

function User({ userClick, userInfo, setText }) {
  return (
    <Link
      // eslint-disable-next-line no-template-curly-in-string
      to={`/${userInfo.id}`}
      key={userInfo.id}
      onClick={e => setText('')}
      className="user-card"
    >
      <div className="user-image">
        <img src={userInfo.Image} alt="" />
      </div>
      <div className="user-name">{userInfo.name}</div>
    </Link>
  );
}

export default User;
