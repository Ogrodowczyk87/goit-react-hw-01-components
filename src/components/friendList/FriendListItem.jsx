import React from "react";
// import PropTypes from "prop-types";

export default function FriendListItem({ isOnline, avatar, name }) {
    return (
        <li>
            <span></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p> {name}</p>
        </li>
    )
}

