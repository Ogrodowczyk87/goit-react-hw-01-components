import React from "react";
import css from "./FriendList.styled.module.css"
import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, avatar, name }) {
    return (

        <li className={css.item}>
            <span className={isOnline ? css.status__true : css.status__false}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}> {name}</p>
        </li>
    )
}

FriendListItem.prototype = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

