import React, { forwardRef } from "react";
import styles from "../styles/post.module.scss";
import { Avatar, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ShareIcon from "@material-ui/icons/Share";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className={styles.post} ref={ref}>
        <div className={styles.post__avatar}>
          <Avatar src={avatar} />
        </div>
        <div className={styles.post__body}>
          <div className={styles.post__header}>
            <div className={styles.post__headerText}>
              <h3>
                {displayName}{" "}
                <span className={styles.post__headerSpecial}>
                  {verified && (
                    <VerifiedUserIcon className={styles.post__badge} />
                  )}
                  @{username}
                </span>
              </h3>
            </div>
            <div className={styles.post__headerDescription}>
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className={styles.post__footer}>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <ShareIcon fontSize="small />" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
