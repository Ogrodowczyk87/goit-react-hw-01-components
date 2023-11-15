import React from "react";
import PropTypes from 'prop-types';
import css from "./Profile.module.css"


export const profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }
}) => {
    return <div className={css.profile}>
        <div className={css.description}>
            <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                class="avatar"
                width={100}
                height={100}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <div className={css.conatiner}>
            <ul class="stats">
                <li className={css.statsItem}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>2000{views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    </div>

}

profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number, 
        views: PropTypes.number, 
        likes: PropTypes.number, 
    })
};

export default profile


