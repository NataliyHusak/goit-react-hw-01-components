import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({
  friend: { isOnline, avatar, name },
  alt = "avatar"
}) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.onLine : styles.offLine} />
      <img className={styles.avatar} src={avatar} alt={alt} width="80" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }),
  alt: PropTypes.string
};

export default FriendListItem;
