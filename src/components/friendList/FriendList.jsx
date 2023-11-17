import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";


export default function FriendList({ friends }) {
    return <list>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))}
    </list>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
}

