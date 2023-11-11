import React from "react";
import FriendListItem from "./FriendListItem";

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
