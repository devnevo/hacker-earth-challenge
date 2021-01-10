import {React, useEffect} from 'react';
import UserCard from "./UserCard";
import {Link, useLocation } from "react-router-dom";


function Homepage({itemsToDisplay, setText}){
    let location = useLocation();
    useEffect(
        () => {
          setText('')
        },
        [location]
      )
    return (
        <div className="container">
            <div className="searchBar">
                <input type="search" onChange={e => {setText(e.target.value.toLocaleLowerCase())}} placeholder="Search" aria-label="Search"/>
                <Link to='/shortlisted' className="btn accept-btn">Shortlisted List</Link>
                <Link to='/rejectlist' className="btn reject-btn">Rejected List</Link>
            </div>
            <div className="user-cards">
                {itemsToDisplay.map((user) => (
                    <UserCard setText={setText} userInfo={user}/>
                ))}
            </div>
                {!itemsToDisplay.length && (
                <div>No items to display</div>
                )}
        </div>
    )
}

export default Homepage;